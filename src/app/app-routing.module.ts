import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfermaDatiComponent } from './conferma-dati/conferma-dati.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { RisultatoComponent } from './risultato/risultato.component';


const routes: Routes = [
  //{path:'form', component : ConfermaDatiComponent},
  { path: 'form', loadChildren: () => import('./features/conferma-dati/conferma-dati.module').then(m => m.ConfermaDatiModule) },
  //{path:'questionario', component : QuestionarioComponent},
  { path: 'questionario', loadChildren: () => import('./features/questionario/questionario.module').then(m => m.QuestionarioModule) },
  //{path:'risultato', component : RisultatoComponent},
  { path: 'risultato', loadChildren: () => import('./features/risultato/risultato.module').then(m => m.RisultatoModule) },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
