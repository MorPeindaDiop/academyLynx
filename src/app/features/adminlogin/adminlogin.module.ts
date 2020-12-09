import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminloginComponent } from './main/adminlogin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AdminloginComponent],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    SharedModule
  ]
})
export class AdminloginModule { }
