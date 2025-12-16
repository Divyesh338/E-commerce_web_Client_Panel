import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarRatingModule } from 'ngx-bar-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng5SliderModule } from 'ng5-slider';
import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CollectionComponent } from './collection/collection.component';
import { CompareComponent } from './compare/compare.component';
import { HomeComponent } from './home/home.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { LogoComponent } from './home/logo/logo.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SuccessComponent } from './success/success.component';
import { CategoryComponent } from './widget/category/category.component';
import { BrandComponent } from './widget/filter/brand/brand.component';
import { ColorComponent } from './widget/filter/color/color.component';
import { PriceComponent } from './widget/filter/price/price.component';
import { NewProductComponent } from './widget/new-product/new-product.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    CartComponent,
    CheckOutComponent,
    CollectionComponent,
    CompareComponent,
    HomeComponent,
    CollectionBannerComponent,
    LogoComponent,
    ParallaxBannerComponent,
    ProductSliderComponent,
    ProductTabComponent,
    SliderComponent,
    ProductComponent,
    ProductDetailsComponent,
    SuccessComponent,
    CategoryComponent,
    BrandComponent,
    ColorComponent,
    PriceComponent,
    NewProductComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    SharedModule,
    BarRatingModule,
    InfiniteScrollModule,
    // NgxSliderModule 

  ]
})
export class ShopModule { }
