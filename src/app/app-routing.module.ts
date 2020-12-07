import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionarioGuard } from './core/guard/questionario.guard';
import { RisultatoGuard } from './core/guard/risultato.guard';


const routes: Routes = [
  { path: 'form', loadChildren: () => import('./features/conferma-dati/conferma-dati.module').then(m => m.ConfermaDatiModule) },
  { path: 'questionario', loadChildren: () => import('./features/questionario/questionario.module').then(m => m.QuestionarioModule), canActivate: [QuestionarioGuard] },
  { path: 'risultato', loadChildren: () => import('./features/risultato/risultato.module').then(m => m.RisultatoModule), canActivate: [RisultatoGuard] },
  { path: 'admin/skill', loadChildren: () => import('./featuresAdmin/skill/skill.module').then(m => m.SkillModule) },
  { path: 'admin/seniority', loadChildren: () => import('./featuresAdmin/seniority/seniority.module').then(m => m.SeniorityModule) },
  { path: 'admin/question', loadChildren: () => import('./featuresAdmin/question/question.module').then(m => m.QuestionModule) },
  { path: 'admin/field', loadChildren: () => import('./featuresAdmin/field/field.module').then(m => m.FieldModule) },
  { path: 'admin/candidate', loadChildren: () => import('./featuresAdmin/candidate/candidate.module').then(m => m.CandidateModule) },
  {path: 'admin/panel', loadChildren: ()=> import('./featuresAdmin/panel/panel.module').then(m=>m.PanelModule)},
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
