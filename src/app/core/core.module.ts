import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpCommunicationsService } from './HttpCommunications/http-communications.service.spec';




@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService],
  imports: [
    HttpClientModule,
  ]
})
export class CoreModule { }
