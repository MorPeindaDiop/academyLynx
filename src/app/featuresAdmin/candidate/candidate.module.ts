import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './main/candidate.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CandidateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule,
  ]
})
export class CandidateModule { }
