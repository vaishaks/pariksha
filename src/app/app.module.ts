import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarService } from './layout/navbar/navbar.service';

import { AppComponent } from './app.component';
import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { AddQuestionComponent } from './create-feature/add-question-component/add-question-component.component';
import { ClickOutsideDirective } from './layout/clickOutsideDirective/click-outside.directive';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

import { AppRoutingModule } from './app-routing.module';
import { InputImageComponent } from './input-feature/input-image-component/input-image.component';
import { InputTextComponent } from './input-feature/input-text/input-text.component';
import { CreateTestComponent } from './create-feature/create-test/create-test.component';
import { CreateSearchComponent } from './create-feature/create-search/create-search.component';
import { SearchComponent } from './layout/search/search.component';
import { LonelyComponent } from './layout/lonely/lonely.component';
import { QuestioncardComponent } from './layout/questioncard/questioncard.component';
import { QuestionDetailsComponent } from './layout/question-details/question-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    NavbarComponent,
    UnderConstructionComponent,
    CreateComponentComponent,
    AddQuestionComponent,
    InputImageComponent,
    InputTextComponent,
    CreateTestComponent,
    CreateSearchComponent,
    SearchComponent,
    LonelyComponent,
    QuestioncardComponent,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
