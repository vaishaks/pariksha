import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { AddQuestionComponent } from './create-feature/add-question-component/add-question-component.component';
import { InputImageComponent } from './input-feature/input-image-component/input-image.component';
import { InputTextComponent } from './input-feature/input-text/input-text.component';
import { CreateSearchComponent } from './create-feature/create-search/create-search.component';
import { CreateAutoquizComponent } from './create-feature/create-autoquiz/create-autoquiz.component';
import { CreateTestComponent } from './create-feature/create-test/create-test.component';
import { QuestionDetailsComponent } from './layout/question-details/question-details.component';
import { HomeComponent } from './home-feature/home/home.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'underconstruction',  component: UnderConstructionComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'create',  component: CreateComponentComponent },
    { path: 'create/test',  component: CreateTestComponent },
    { path: 'create/auto-quiz',  component: InputTextComponent },
    { path: 'create/auto-quiz/questions',  component: CreateAutoquizComponent },
    { path: 'create/edit',  component: InputTextComponent },
    { path: 'create/test/search',  component: CreateSearchComponent },
    { path: 'create/test/search/details',  component: QuestionDetailsComponent },
    { path: 'add-question',  component: InputImageComponent },
    { path: '**', redirectTo: '/underconstruction' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
