import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ConfermaDatiComponent } from './conferma-dati/conferma-dati.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { RisultatoComponent } from './risultato/risultato.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrazioneComponent,
    ConfermaDatiComponent,
    QuestionarioComponent,
    RisultatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
