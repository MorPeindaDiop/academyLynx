import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformazioniComponent } from '../login/informazioni/informazioni.component';


import { ConfermaDatiComponent } from './main/conferma-dati.component';

const routes: Routes = [{ path: '', component: ConfermaDatiComponent },
{ path: 'informazioni', component: InformazioniComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfermaDatiRoutingModule { }
