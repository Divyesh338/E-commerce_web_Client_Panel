import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  SliderConfig = {
    autoPlay: true,
    autoplaySpeed: 2000
  };

  constructor() { }

  ngOnInit(): void {
  }
}
