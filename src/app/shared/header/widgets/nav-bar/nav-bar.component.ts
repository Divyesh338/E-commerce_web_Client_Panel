import { Component } from '@angular/core';
import { Menu, MENUITEMS } from '../nav-bar/nav-bar-items';

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
  }
}
