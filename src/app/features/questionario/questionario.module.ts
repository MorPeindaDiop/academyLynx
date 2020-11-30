import { NgModule } from '@angular/core';
import { QuestionarioRoutingModule } from './questionario-routing.module';
import { QuestionarioComponent } from './main/questionario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [QuestionarioComponent],
  imports: [
    CommonModule,
    QuestionarioRoutingModule,
    SharedModule,
  ]
})
export class QuestionarioModule { }
