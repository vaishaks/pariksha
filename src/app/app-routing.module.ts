import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

const routes: Routes = [
    { path: '', redirectTo: '/underconstruction', pathMatch: 'full' },
    { path: 'underconstruction',  component: UnderConstructionComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
