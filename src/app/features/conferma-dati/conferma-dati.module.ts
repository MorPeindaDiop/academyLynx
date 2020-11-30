import { NgModule } from '@angular/core';
import { ConfermaDatiRoutingModule } from './conferma-dati-routing.module';
import { ConfermaDatiComponent } from './main/conferma-dati.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ConfermaDatiComponent],
  imports: [
    CommonModule,
    ConfermaDatiRoutingModule,
    SharedModule,
  ]
})
export class ConfermaDatiModule { }
