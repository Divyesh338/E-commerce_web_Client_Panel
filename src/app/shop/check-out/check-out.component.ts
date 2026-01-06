import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartItem } from 'src/app/shared/types/cart-item.interface';
import { environment } from 'src/environments/environment.prod';
declare var paypal: any;

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  checkoutForm!: FormGroup;
  checkOutItems: CartItem[] = [];

  amount = 0;
  totalAmount = 0;
  shippingAmount = 40;

  orderPayload: any;

  paypalLoaded = false;
  paypalRendered = false;

  constructor(
    public productsService: ProductsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private cartService: CartService,
    private http: HttpService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadPayPalScript();

    this.cartService.getItems().subscribe((items) => {
      this.checkOutItems = items;
    });

    this.getTotal().subscribe((total) => {
      this.amount = total;
      this.totalAmount = total + this.shippingAmount;
    });
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
    });
  }

  getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  onSubmit() {
    if (this.checkoutForm.invalid) {
      this.toastr.error('Please fill all required fields');
      return;
    }

    const items = this.checkOutItems.map((i) => ({
      ProductId: i.product.id,
      Quantity: i.quantity.toString(),
      Size: '',
      Color: '',
      Price: i.product.price.toString(),
      Discount: i.product.discount.toString(),
    }));

    this.orderPayload = {
      id: 0,
      ...this.checkoutForm.value,
      amount: this.amount.toString(),
      shippingAmount: this.shippingAmount.toString(),
      paymentTypeId: 2,
      items,
      payment: {},
    };

    const container = document.getElementById('paypal-button-container');
    if (container) container.style.display = 'block';

    if (!this.paypalRendered && this.paypalLoaded) {
      this.renderPayPalButton();
      this.paypalRendered = true;
    }
  }

  loadPayPalScript() {
    if (document.getElementById('paypal-sdk')) {
      this.paypalLoaded = true;
      return;
    }

    const script = document.createElement('script');
    script.id = 'paypal-sdk';
    script.src = `https://www.paypal.com/sdk/js?client-id=${environment.paypalClientId}&currency=USD`;

    script.onload = () => {
      this.paypalLoaded = true;
    };

    document.body.appendChild(script);
  }

  renderPayPalButton() {
    paypal
      .Buttons({
        createOrder: (_: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.totalAmount.toString(),
                },
              },
            ],
          });
        },

        onApprove: (_: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            this.processPayment(details);
          });
        },

        onError: (err: any) => {
          console.error(err);
          this.toastr.error('PayPal payment failed');
        },
      })
      .render('#paypal-button-container');
  }

  processPayment(details: any) {
    this.orderPayload.payment = {
      paymentId: details.id,
      payerId: details.payer.payer_id,
      paymentMethod: 'PayPal',
      amount: this.totalAmount.toString(),
      status: details.status,
    };

    this.http
      .post(
        environment.BASE_API_PATH + 'PaymentMaster/Save/',
        this.orderPayload
      )
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.toastr.success('Payment successful');

          this.orderService.setOrderDetils({
            product: this.checkOutItems,
            shippingDetails: this.orderPayload,
            orderId: res.data.orderId,
            totalAmount: this.totalAmount,
            expectedDate: res.data.expecteddate,
            paymentDate: res.data.paymentDate,
          });

          this.checkoutForm.reset();
        } else {
          this.toastr.error(res.errors[0]);
        }
      });
  }
}
