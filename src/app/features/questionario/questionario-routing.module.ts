import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionarioComponent } from './main/questionario.component';

const routes: Routes = [{ path: '', component: QuestionarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionarioRoutingModule { }
