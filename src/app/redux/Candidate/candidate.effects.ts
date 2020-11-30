import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { createCandidate, deleteCandidate, initCandidate, initCandidates, retrieveAllCandidates, setCandidateScore } from './candidate.actions';
import { Candidate } from 'src/app/core/model/Candidate.interface';

@Injectable()
export class CandidatesEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidates(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidate/findAll")
    }

    createCandidate(candidate: Candidate): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidate/create", candidate)
    }

    setScoreCandidate(idCandidate: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("score/createScore", idCandidate)
    }

    deleteCandidate(idCandidate: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidate/delete", idCandidate)
    }

    getAllCandidates$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidates),
        switchMap(() => this.retreiveAllCandidates().pipe(
            map((response) => initCandidates({ response }))
        ))
    ));

    createCandidate$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidate),
        switchMap(candidate => this.createCandidate(candidate.candidate).pipe(
            switchMap((response) => [initCandidate({ response }), retrieveAllCandidates()]),
        )
        ))
    );

    deleteCandidate$ = createEffect(() => this.actions$.pipe(
        ofType(deleteCandidate),
        switchMap(idCandidate => this.deleteCandidate(idCandidate.idCandidate).pipe(
            map(() => retrieveAllCandidates())
        ))
    ));

    setScoreCandidate$ = createEffect(() => this.actions$.pipe(
        ofType(setCandidateScore),
        switchMap(idCandidate => this.setScoreCandidate(idCandidate.idCandidate).pipe(
            switchMap((response) => [initCandidate({ response }), retrieveAllCandidates()]),
        )
        ))
    );

}