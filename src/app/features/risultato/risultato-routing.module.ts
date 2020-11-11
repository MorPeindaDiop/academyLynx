import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RisultatoComponent } from './main/risultato.component';

const routes: Routes = [{ path: '', component: RisultatoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisultatoRoutingModule { }
