import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponentComponent } from './create-feature/create-component/create-component.component';
import { CreateTestComponent } from './create-feature/create-test/create-test.component';
import { UnderConstructionComponent } from './layout/under-construction/under-construction.component';

const routes: Routes = [
    { path: '', redirectTo: '/underconstruction', pathMatch: 'full' },
    { path: 'underconstruction',  component: UnderConstructionComponent },
    { path: 'create',  component: CreateComponentComponent },
    { path: 'create/test',  component: CreateTestComponent },
    { path: '**', redirectTo: '/underconstruction' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
