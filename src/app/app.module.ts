import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroMainComponent } from './hero-main/hero-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, HeroMainComponent]
})
export class AppModule { }
