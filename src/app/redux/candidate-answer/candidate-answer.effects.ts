import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { createCandidateAnswer, retrieveAllCandidateAnswers, initCandidateAnswers } from './candidate-answer.actions';
import { CandidateAnswer } from 'src/app/core/model/CandidateAnswer.interface';
import { CandidateResponse } from 'src/app/core/model/CandidateResponse.interface';
import { setCandidateScore } from '../candidate/candidate.actions';

@Injectable()
export class CandidateAnswersEffects {

    idCandidate: number;

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidateAnswers(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidateAnswer/findAll")
    }

    createCandidateAnswer(candidateResponse: CandidateResponse[]): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidateAnswer/create",  candidateResponse )
    }

    createCandidateAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateAnswer),
        switchMap(candidateAnswer => this.createCandidateAnswer(candidateAnswer.candidateResponse).pipe(
            switchMap((idCandidate) => [retrieveAllCandidateAnswers(), this.idCandidate = idCandidate.result],
            )
        ))
    ));

    getAllCandidateAnswers$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidateAnswers),
        switchMap(() => this.retreiveAllCandidateAnswers().pipe(
            switchMap((response) => [initCandidateAnswers({ response }), setCandidateScore({idCandidate: this.idCandidate })])
        ))
    ));
}

//map(() => retrieveAllCandidateAnswers(),