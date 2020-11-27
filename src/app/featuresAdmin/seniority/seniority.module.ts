import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeniorityRoutingModule } from './seniority-routing.module';
import { SeniorityComponent } from './main/seniority.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SeniorityComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SeniorityRoutingModule,
    SharedModule
  ]
})
export class SeniorityModule { }
