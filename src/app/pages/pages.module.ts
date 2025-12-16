import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AboutUsComponent,
    ErrorPageComponent,
    ContactUsComponent,
    FAQComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    ToastrModule,   
    SlickCarouselModule,
  ]
})
export class PagesModule { }
