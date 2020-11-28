import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

import { FieldComponent } from './main/field.component';

const routes: Routes = [
  { path: '', component: FieldComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldRoutingModule { }
