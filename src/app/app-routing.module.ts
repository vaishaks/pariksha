import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { AddQuestionComponent } from './create-feature/add-question-component/add-question-component.component';
import { InputImageComponent } from './input-feature/input-image-component/input-image.component';
import { CreateSearchComponent } from './create-feature/create-search/create-search.component';
import { CreateTestComponent } from './create-feature/create-test/create-test.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

const routes: Routes = [
    { path: '', redirectTo: '/underconstruction', pathMatch: 'full' },
    { path: 'underconstruction',  component: UnderConstructionComponent },
    { path: 'create',  component: CreateComponentComponent },
    { path: 'create/test',  component: CreateTestComponent },
    { path: 'create/test/search',  component: CreateSearchComponent },
    { path: 'add-question',  component: InputImageComponent },
    { path: '**', redirectTo: '/underconstruction' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
