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

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  checkoutForm!: FormGroup;
  checkOutItems: CartItem[] = [];
  amount = 0;
  totalAmount = 0;
  shippingAmount = 40;

  handler: any;
  orderPayload: any;

  constructor(
    public productsService: ProductsService,
    private _dataService: HttpService,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private cartService: CartService,
    private orderService: OrdersService
  ) {}

  // ---------------- INIT ----------------
  ngOnInit(): void {
    this.createRegForm();
    this.loadStripe();

    this.cartService.getItems().subscribe(items => {
      this.checkOutItems = items;
    });

    this.getTotal().subscribe(total => {
      this.amount = total;
      this.totalAmount = total + this.shippingAmount;
    });
  }

  // ---------------- FORM ----------------
  createRegForm() {
    this.checkoutForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
  }

  // ---------------- CART TOTAL ----------------
  getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  // ---------------- SUBMIT ----------------
  onSubmit() {
    if (this.checkoutForm.invalid) {
      this._toastr.error('Please fill all required fields');
      return;
    }
    debugger;
    const items = this.checkOutItems.map(i => ({
      ProductId: i.product.id,
      Quantity: i.quantity.toString(),
      Size: '',
      Color: '',
      Price: i.product.price.toString(),
      Discount: i.product.discount.toString()
    }));

    this.orderPayload = {
      id: 0,
      ...this.checkoutForm.value,
      amount: this.amount.toString(),
      shippingAmount: this.shippingAmount.toString(),
      paymentTypeId: 1,
      items,
      payment: {}
    };

    this.handler.open({
      name: 'Sahosoft Mall',
      description: 'E-commerce Purchase',
      currency: 'INR',
      amount: this.totalAmount * 100
    });
  }

  // ---------------- STRIPE LOAD ----------------
  loadStripe() {
    debugger;
    if (!document.getElementById('stripe-script')) {
      const s = document.createElement('script');
      s.id = 'stripe-script';
      s.src = 'https://checkout.stripe.com/checkout.js';

      s.onload = () => {
        this.handler = (window as any).StripeCheckout.configure({
          key: environment.stripePublicKey, // pk_test_xxx
          locale: 'auto',
          token: (token: any) => {
            this.processPayment(token);
          }
        });
      };

      document.body.appendChild(s);
    }
  }

  // ---------------- PAYMENT ----------------
  processPayment(token: any) {
    this.orderPayload.payment = {
      tokenId: token.id,
      amount: this.totalAmount.toString(),
      description: 'Shopping with Sahosoft Mall'
    };
    debugger;
    this._dataService
      .post(environment.BASE_API_PATH + 'PaymentMaster/Save/', this.orderPayload)
      .subscribe(res => {
        if (res.isSuccess) {
          this._toastr.success('Payment successful');

          this.orderService.setOrderDetils({
            product: this.checkOutItems,
            shippingDetails: this.orderPayload,
            orderId: res.data.orderId,
            totalAmount: this.totalAmount,
            expectedDate: res.data.expecteddate,
            paymentDate: res.data.paymentDate
          });

          this.checkoutForm.reset();
        } else {
          this._toastr.error(res.errors[0]);
        }
      });
  }
}
