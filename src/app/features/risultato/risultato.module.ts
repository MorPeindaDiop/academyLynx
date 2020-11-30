import { NgModule } from '@angular/core';
import { RisultatoRoutingModule } from './risultato-routing.module';
import { RisultatoComponent } from './main/risultato.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RisultatoComponent],
  imports: [
    CommonModule,
    RisultatoRoutingModule,
    SharedModule,
  ]
})
export class RisultatoModule { }
