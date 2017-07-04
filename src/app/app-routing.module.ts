import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

const routes: Routes = [
    { path: '', redirectTo: '/underconstruction', pathMatch: 'full' },
    { path: 'underconstruction',  component: UnderConstructionComponent },
    { path: 'create',  component: CreateComponentComponent },
    { path: '**', redirectTo: '/underconstruction'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
