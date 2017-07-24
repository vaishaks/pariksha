import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { AddQuestionComponent } from './create-feature/add-question-component/add-question-component.component';
import { ClickOutsideDirective } from './layout/clickOutsideDirective/click-outside.directive';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

import { AppRoutingModule } from './app-routing.module';
import { InputImageComponent } from './input-feature/input-image-component/input-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    NavbarComponent,
    UnderConstructionComponent,
    CreateComponentComponent,
    AddQuestionComponent,
    InputImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
