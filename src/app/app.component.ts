import { Component } from '@angular/core';
// import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alibaba-pro';

  constructor(
    // private _translate: TranslateService
  ) {
    // this._translate.addLangs(['en', 'hi']);
    // this._translate.setDefaultLang('en');
  }
  ngOnInit() { }
}
