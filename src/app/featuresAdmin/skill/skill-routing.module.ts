import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

import { SkillComponent } from './main/skill.component';

const routes: Routes = [
  { path: '', component: SkillComponent },
  { path: 'detail/:id', component: DetailComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
