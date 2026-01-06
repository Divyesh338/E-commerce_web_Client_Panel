import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isOpen = true;

  toggleCategory() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
