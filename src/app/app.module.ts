import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ClickOutsideDirective } from './layout/clickOutsideDirective/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
