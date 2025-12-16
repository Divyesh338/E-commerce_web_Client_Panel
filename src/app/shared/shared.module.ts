import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { CategoryComponent } from './footer/widgets/category/category.component';
import { CopyRightsComponent } from './footer/widgets/copy-rights/copy-rights.component';
import { InformationComponent } from './footer/widgets/information/information.component';
import { SocialComponent } from './footer/widgets/social/social.component';
import { WhyWeChooseUsComponent } from './footer/widgets/why-we-choose-us/why-we-choose-us.component';
import { HeaderOneComponent } from './header/header-one/header-one.component';
import { HeaderTwoComponent } from './header/header-two/header-two.component';
import { LeftMenuComponent } from './header/widgets/left-menu/left-menu.component';
import { NavBarComponent } from './header/widgets/nav-bar/nav-bar.component';
import { TopBarComponent } from './header/widgets/top-bar/top-bar.component';
// import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './header/widgets/settings/settings.component';



@NgModule({
  declarations: [
    FooterOneComponent,
    FooterTwoComponent,
    CategoryComponent,
    CopyRightsComponent,
    InformationComponent,
    SocialComponent,
    WhyWeChooseUsComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    LeftMenuComponent,
    NavBarComponent,
    SettingsComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // TranslateModule
  ],
  exports: [
    HeaderOneComponent,
    HeaderTwoComponent,
    FooterOneComponent,
    FooterTwoComponent,
    NavBarComponent,

  ]
})
export class SharedModule { }
