import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { reducers } from './redux';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SkillsEffects } from './redux/skill/skill.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SenioritiesEffects } from './redux/seniority/seniority.effects';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SkillsEffects,SenioritiesEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    
  ],
  exports:[MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
