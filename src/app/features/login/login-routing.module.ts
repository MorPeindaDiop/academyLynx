import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { LoginComponent } from './main/login.component';




const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'informazioni', component: InformazioniComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
