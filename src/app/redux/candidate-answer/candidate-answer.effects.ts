import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { createCandidateAnswer, retrieveAllCandidateAnswers, initCandidateAnswers, retrieveCandidateAnswersByIdCandidate, initCandidateAnswersByIdCandidate, createCandidateTest, initCurrentCandidateAnswers } from './candidate-answer.actions';
import { CandidateAnswer } from 'src/app/core/model/CandidateAnswer.interface';
import { CandidateResponse } from 'src/app/core/model/CandidateResponse.interface';
import { setCandidateScore } from '../candidate/candidate.actions';

@Injectable()
export class CandidateAnswersEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidateAnswers(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidateAnswer/findAll")
    }

    createCandidateAnswer(candidateResponse: CandidateResponse[]): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidateAnswer/create", candidateResponse)
    }

    retreiveAllCandidateAnswersByIdCandidate(idCandidate: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidateAnswer/currentCandidateAnswer", idCandidate)}
        
    createCandidateTest(candidateAnswer: CandidateAnswer[]): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidateAnswer/createTest", candidateAnswer)
    }

    createCandidateAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateAnswer),
        switchMap(candidateAnswer => this.createCandidateAnswer(candidateAnswer.candidateResponse).pipe(
            switchMap((idCandidate) => [retrieveAllCandidateAnswers(), setCandidateScore({ idCandidate: idCandidate.result })],
            )
        ))
    ));

    createCandidateTest$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateTest),
        switchMap(candidateAnswer => this.createCandidateTest(candidateAnswer.candidateAnswer).pipe(
            switchMap((response) => [initCurrentCandidateAnswers({response})]
            )
        ))
    ));

    getAllCandidateAnswers$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidateAnswers),
        switchMap(() => this.retreiveAllCandidateAnswers().pipe(
            switchMap((response) => [initCandidateAnswers({ response })])
        ))
    ));

    getAllCandidateAnswersByIdCandidate$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveCandidateAnswersByIdCandidate),
        switchMap((idCandidate) => this.retreiveAllCandidateAnswersByIdCandidate(idCandidate.idCandidate).pipe(
            switchMap((response) => [initCandidateAnswersByIdCandidate({ response })])
        ))
    ));
}
