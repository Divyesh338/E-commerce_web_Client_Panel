import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  testimonial = [{
    image: 'assets/images/6.webp',
    name: 'Chandan Singh',
    designation: 'Designer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/5.webp',
    name: 'Ajeet Singh',
    designation: 'Content Writer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/4.webp',
    name: 'Madhu Singh',
    designation: 'Lead Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  },
  {
    image: 'assets/images/3.webp',
    name: 'Ajay Singh',
    designation: 'Content Writer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  },
  {
    image: 'assets/images/2.webp',
    name: 'Rahul Singh',
    designation: 'Lead Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  },
  {
    image: 'assets/images/1.webp',
    name: 'Rana Singh',
    designation: 'Lead Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  },];


  // Teastimonial Slick slider config
  testimonialSliderConfig = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Team 
  team = [{
    image: 'assets/images/1.webp',
    name: 'Ajeet Singh',
    designation: 'CEO & Founder at Company'
  }, {
    image: 'assets/images/2.webp',
    name: 'Chandan Singh',
    designation: 'CEO & Founder at Company'
  }, {
    image: 'assets/images/3.webp',
    name: 'Madhu Singh',
    designation: 'Designer & Content Writer'
  }, {
    image: 'assets/images/4.webp',
    name: 'Priyanshu Singh',
    designation: 'Lead Developer'
  },
  {
    image: 'assets/images/5.webp',
    name: 'Madhav Singh',
    designation: 'Designer & Content Writer'
  },
  {
    image: 'assets/images/6.webp',
    name: 'Priynaka Singh',
    designation: 'Lead Developer'
  },
  {
    image: 'assets/images/7.webp',
    name: 'Pankaj Singh',
    designation: 'Lead Developer'
  },
  {
    image: 'assets/images/8.webp',
    name: 'Pankaj Singh',
    designation: 'Lead Developer'
  }
  ];

  // Team Slick slider config
  teamSliderConfig = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
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
        breakpoint: 586,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
