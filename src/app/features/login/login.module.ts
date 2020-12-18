import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './main/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformazioniComponent } from './informazioni/informazioni.component';




@NgModule({
  declarations: [LoginComponent, InformazioniComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
