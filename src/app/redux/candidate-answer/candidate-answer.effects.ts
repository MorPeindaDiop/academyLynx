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

@Injectable()
export class CandidateAnswersEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidateAnswers(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidateAnswer/findAll")
    }

    createCandidateAnswer(idCandidate: number, candidateResponse: CandidateResponse[]): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidateAnswer/create",  {idCandidate, candidateResponse} )
    }

    createCandidateAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateAnswer),
        switchMap(candidateAnswer => this.createCandidateAnswer(candidateAnswer.idCandidate, candidateAnswer.candidateResponse).pipe(
            map(() => retrieveAllCandidateAnswers(),
            )
        ))
    ));

    getAllCandidateAnswers$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidateAnswers),
        switchMap(() => this.retreiveAllCandidateAnswers().pipe(
            map((response) => initCandidateAnswers({ response }))
        ))
    ));
}