import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

import { CandidateComponent } from './main/candidate.component';

const routes: Routes = [
  { path: '', component: CandidateComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
