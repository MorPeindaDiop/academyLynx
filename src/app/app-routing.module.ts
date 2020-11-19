import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path:'form', component : ConfermaDatiComponent},
  { path: 'form', loadChildren: () => import('./features/conferma-dati/conferma-dati.module').then(m => m.ConfermaDatiModule) },
  //{path:'questionario', component : QuestionarioComponent},
  { path: 'questionario', loadChildren: () => import('./features/questionario/questionario.module').then(m => m.QuestionarioModule) },
  //{path:'risultato', component : RisultatoComponent},
  { path: 'risultato', loadChildren: () => import('./features/risultato/risultato.module').then(m => m.RisultatoModule) },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'admin/skill', loadChildren: () => import('./featuresAdmin/skill/skill.module').then(m => m.SkillModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
