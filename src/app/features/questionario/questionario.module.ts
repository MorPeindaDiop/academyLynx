import { NgModule } from '@angular/core';
import { QuestionarioRoutingModule } from './questionario-routing.module';
import { QuestionarioComponent } from './main/questionario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';

@NgModule({
  declarations: [QuestionarioComponent],
  imports: [
    CommonModule,
    QuestionarioRoutingModule,
    SharedModule,
    CountdownModule,
  ],
})
export class QuestionarioModule { }
