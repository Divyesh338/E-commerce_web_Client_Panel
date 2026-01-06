import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WhislistService } from 'src/app/shared/services/whislist.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  counter = 1;
  selectedSize = '';
  activeTab: 'description' | 'short' = 'description';
  selectedImage!: string;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  slideNavConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _productsService: ProductsService,
    private _cartService: CartService,
    private _wishlistService: WhislistService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      if (!id) return;

      this._productsService.getProduct(id).subscribe((product) => {
        this.product = product || undefined;

        // ✅ SET DEFAULT IMAGE
        if (this.product?.pictures?.length) {
          this.selectedImage = this.product.pictures[0];
        }
      });
    });
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  trackByImage(index: number, image: string): string {
    return image;
  }

  changeSize(size: string) {
    this.selectedSize = size;
  }

  increment() {
    if (this.product && this.counter < this.product.stock) {
      this.counter++;
    }
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  addToCart() {
    if (!this.product) return;
    this._cartService.addToCart(this.product, this.counter);
  }

  addToWishlist() {
    if (!this.product) return;
    this._wishlistService.addToWishlist(this.product);
  }

  buyNow() {
    if (!this.product) return;

    const exists = this._cartService.hasProduct(this.product);
    if (!exists) {
      this._cartService.addToCart(this.product, this.counter);
    }

    this.router.navigate(['/home/checkout']);
  }
}
