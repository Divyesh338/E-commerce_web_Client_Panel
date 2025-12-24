import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent {
  @Input() products: Product[] = [];
  @ViewChild('slickModal', { static: false }) slickModal!: SlickCarouselComponent;

  productSliderConfig: any = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  };


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      console.log("Products Updated:", this.products);

      setTimeout(() => {
        if (this.slickModal) {
          this.slickModal.unslick();        // destroy old
          this.slickModal.initSlick();      // re-init slick
        }
      });
    }
  }
}
