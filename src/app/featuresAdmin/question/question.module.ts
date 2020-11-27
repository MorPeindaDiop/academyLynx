import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './main/question.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [QuestionComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule
  ]
})
export class QuestionModule { }
