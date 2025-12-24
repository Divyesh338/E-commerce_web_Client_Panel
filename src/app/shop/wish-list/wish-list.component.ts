import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WhislistService } from 'src/app/shared/services/whislist.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  wishlistItems: Product[] = [];

  constructor(private _cartService: CartService, public _productsService: ProductsService,
    private _wishlistService: WhislistService) { }


  ngOnInit(): void {
    this._wishlistService.getItems().subscribe(res => {
      this.wishlistItems = res;
    });
  }

  removeItem(item: Product) {
    this._wishlistService.removeFromWishlist(item);
  }

  addToCartFromWishlist(product: Product) {
    this._cartService.addToCart(product);
    this._wishlistService.removeFromWishlist(product);
  }
}
