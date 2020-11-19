import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { initSeniorities, retrieveAllSeniorities } from './seniority.actions';

@Injectable()
export class SenioritiesEffects{
    
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllSeniorities():Observable<Response>{
        return this.http.retrieveGetCall<Response>("seniority/findAll")
    }

    getAllSeniorities$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllSeniorities),
        switchMap(() => this.retreiveAllSeniorities().pipe(
            map((response) => initSeniorities({response}))
        ))
    ));

}