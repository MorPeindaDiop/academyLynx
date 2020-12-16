import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpServerComponent } from './help-server.component';

const routes: Routes = [{ path: '', component: HelpServerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpServerRoutingModule { }
