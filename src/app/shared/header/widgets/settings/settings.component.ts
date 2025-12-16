import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  // constructor(private _translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(language: string) {
    // this._translate.use(language);
  }
}
