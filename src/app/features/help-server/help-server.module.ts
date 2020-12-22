import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpServerRoutingModule } from './help-server-routing.module';
import { HelpServerComponent } from './help-server.component';


@NgModule({
  declarations: [HelpServerComponent],
  imports: [
    CommonModule,
    HelpServerRoutingModule
  ]
})
export class HelpServerModule { }
