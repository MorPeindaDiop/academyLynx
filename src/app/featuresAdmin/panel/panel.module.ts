import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './main/panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PanelRoutingModule } from './panel-routing.module';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule,
  ]
})
export class PanelModule { }
