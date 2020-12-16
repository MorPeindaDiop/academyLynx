import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { InformazioniGuard } from './core/guard/informazioni.guard';
import { CandidateLoginGuard } from './core/guard/candidate-login.guard';
import { QuestionarioGuard } from './core/guard/questionario.guard';
import { RisultatoGuard } from './core/guard/risultato.guard';


const routes: Routes = [
  { path: 'form', loadChildren: () => import('./features/conferma-dati/conferma-dati.module').then(m => m.ConfermaDatiModule), canActivate: [AdminGuard] },
  { path: 'questionario', loadChildren: () => import('./features/questionario/questionario.module').then(m => m.QuestionarioModule), canActivate: [CandidateLoginGuard] },
  { path: 'risultato', loadChildren: () => import('./features/risultato/risultato.module').then(m => m.RisultatoModule), canActivate: [CandidateLoginGuard] },
  
  { path: 'adminlogin', loadChildren: () => import('./features/adminlogin/adminlogin.module').then(m => m.AdminloginModule) },
  { path: 'admin/skill', loadChildren: () => import('./featuresAdmin/skill/skill.module').then(m => m.SkillModule), canActivate: [AdminGuard] },
  { path: 'admin/seniority', loadChildren: () => import('./featuresAdmin/seniority/seniority.module').then(m => m.SeniorityModule), canActivate: [AdminGuard] },
  { path: 'admin/question', loadChildren: () => import('./featuresAdmin/question/question.module').then(m => m.QuestionModule), canActivate: [AdminGuard] },
  { path: 'admin/field', loadChildren: () => import('./featuresAdmin/field/field.module').then(m => m.FieldModule), canActivate: [AdminGuard] },
  { path: 'admin/candidate', loadChildren: () => import('./featuresAdmin/candidate/candidate.module').then(m => m.CandidateModule), canActivate: [AdminGuard] },
  { path: 'admin/panel', loadChildren: ()=> import('./featuresAdmin/panel/panel.module').then(m=>m.PanelModule), canActivate: [AdminGuard] },

  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),  },
  { path: 'mail', loadChildren: () => import('./features/mail/mail.module').then(m => m.MailModule) },
  { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
  { path: 'helpServer', loadChildren: () => import('./features/help-server/help-server.module').then(m => m.HelpServerModule) },
  { path: 'emailSuccess', loadChildren: () => import('./features/email-success/email-success.module').then(m => m.EmailSuccessModule) },
  { path: '**', loadChildren: () => import('./features/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
