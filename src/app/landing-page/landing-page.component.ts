import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  categories = [
    { name: 'Electronics', icon: 'bi-phone' },
    { name: 'Fashion', icon: 'bi-bag' },
    { name: 'Home', icon: 'bi-house' },
    { name: 'Beauty', icon: 'bi-heart' }
  ];


  products = [
    { title: 'Wireless Headphones', price: 2499, img: 'assets/images/2.webp' },
    { title: 'Smart Watch', price: 3999, img: 'assets/products/p2.jpg' },
    { title: 'Running Shoes', price: 2999, img: 'assets/products/p3.jpg' },
    { title: 'Backpack', price: 1999, img: 'assets/products/p4.jpg' }
  ];
}
