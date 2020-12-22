import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSuccessRoutingModule } from './email-success-routing.module';
import { EmailSuccessComponent } from './email-success.component';


@NgModule({
  declarations: [EmailSuccessComponent],
  imports: [
    CommonModule,
    EmailSuccessRoutingModule
  ]
})
export class EmailSuccessModule { }
