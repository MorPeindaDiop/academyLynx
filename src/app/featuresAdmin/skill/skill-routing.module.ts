import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillComponent } from './main/skill.component';

const routes: Routes = [{ path: '', component: SkillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
