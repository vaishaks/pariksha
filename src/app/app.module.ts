import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './layout/clickOutsideDirective/click-outside.directive';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    NavbarComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
