import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { CompanyCarouselComponent } from './company-carousel/company-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroMainComponent,
    CompanyCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, HeroMainComponent, CompanyCarouselComponent]
})
export class AppModule { }
