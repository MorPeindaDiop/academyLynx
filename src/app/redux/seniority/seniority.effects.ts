import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { createSeniority, deleteSeniority, initSeniorities, retrieveAllSeniorities } from './seniority.actions';
import { Seniority } from 'src/app/core/model/Seniority';

@Injectable()
export class SenioritiesEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllSeniorities(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("seniority/findAll")
    }

    createSeniority(seniority: Seniority): Observable<Response> {
        return this.http.retrievePostCall<Response>("seniority/create", seniority)
    }

    deleteSeniority(id: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("seniority/delete", id)
    }

    getAllSeniorities$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllSeniorities),
        switchMap(() => this.retreiveAllSeniorities().pipe(
            map((response) => initSeniorities({ response }))
        ))
    ));

    createSeniority$ = createEffect(() => this.actions$.pipe(
        ofType(createSeniority),
        switchMap(seniority => this.createSeniority(seniority.seniority).pipe(
            map(() => retrieveAllSeniorities()),
        )
        ))
    );

    deleteSeniority$ = createEffect(() => this.actions$.pipe(
        ofType(deleteSeniority),
        switchMap(id => this.deleteSeniority(id.id).pipe(
            map(() => retrieveAllSeniorities()),
        )
        ))
    );

}