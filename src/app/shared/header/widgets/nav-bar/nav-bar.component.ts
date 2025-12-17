import { Component } from '@angular/core';
import { Menu, MENUITEMS } from '../left-menu/left-menu-items';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menuItems: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = MENUITEMS;
    console.log(this.menuItems);
  }
}
