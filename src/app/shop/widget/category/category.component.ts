import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  ngOnInit(): void {
    $('#categoryToggleId').on('click', function (e) {
      e.preventDefault();
      //$("#categoryToggle").slideToggle();
      $(this).next('#categoryToggle').slideToggle();
    });
  }
}
