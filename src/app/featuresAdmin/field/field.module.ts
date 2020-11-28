import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldRoutingModule } from './field-routing.module';
import { FieldComponent } from './main/field.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FieldComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    FieldRoutingModule,
    SharedModule
  ]
})
export class FieldModule { }
