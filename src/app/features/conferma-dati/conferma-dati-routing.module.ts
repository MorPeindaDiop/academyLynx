import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfermaDatiComponent } from './main/conferma-dati.component';

const routes: Routes = [{ path: '', component: ConfermaDatiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfermaDatiRoutingModule { }
