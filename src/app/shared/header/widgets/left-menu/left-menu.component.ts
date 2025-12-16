import { Component } from '@angular/core';
import { Menu, MENUITEMS } from './left-menu-items';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  menuItems: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = MENUITEMS;
  }
}
