import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomandeComponent } from './domande/domande.component';

import { RisultatoComponent } from './main/risultato.component';

const routes: Routes = [{ path: '', component: RisultatoComponent },
{path: 'domande', component: DomandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisultatoRoutingModule { }
