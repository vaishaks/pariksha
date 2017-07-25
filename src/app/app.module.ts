import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarService } from './layout/navbar/navbar.service';

import { AppComponent } from './app.component';
import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { ClickOutsideDirective } from './layout/clickOutsideDirective/click-outside.directive';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

import { AppRoutingModule } from './app-routing.module';
import { CreateTestComponent } from './create-feature/create-test/create-test.component';
import { CreateSearchComponent } from './create-feature/create-search/create-search.component';
import { SearchComponent } from './layout/search/search.component';
import { LonelyComponent } from './layout/lonely/lonely.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    NavbarComponent,
    UnderConstructionComponent,
    CreateComponentComponent,
    CreateTestComponent,
    CreateSearchComponent,
    SearchComponent,
    LonelyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
