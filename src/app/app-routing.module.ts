import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfermaDatiComponent } from './conferma-dati/conferma-dati.component';
import { QuestionarioComponent } from './questionario/questionario.component';


const routes: Routes = [
  {path:'questionario', component : QuestionarioComponent},
  {path:'form', component : ConfermaDatiComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
