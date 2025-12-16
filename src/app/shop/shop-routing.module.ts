import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CompareComponent } from './compare/compare.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SuccessComponent } from './success/success.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {
    path: 'shop',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishListComponent
  },
  {
    path: 'compare',
    component: CompareComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent
  },
  {
    path: 'checkout/success',
    component: SuccessComponent
  },
  {
    path: 'product/details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'left-sidebar/collection/:category',
    component: CollectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
