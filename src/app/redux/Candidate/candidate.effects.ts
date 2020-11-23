import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response';
import { retrieveAllCandidates, initCandidates, createCandidate, createCandidateSuccess } from './candidate.actions';
import { Candidate } from 'src/app/core/model/Candidate';

@Injectable()
export class CandidatesEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidates(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidate/findAll")
    }

    createCandidate(candidate: Candidate): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidate/create", { candidate })
    }

    formatCandidate(candidate: Candidate): Candidate {
        return { name: candidate.name, surname: candidate.surname, idSeniority: candidate.idSeniority } as Candidate;
    }

    createCandidate$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidate),
        switchMap(candidate => this.createCandidate(candidate).pipe(
            switchMap(response => of(this.formatCandidate(response.result)).pipe(
                map((formattedCandidate) => createCandidateSuccess({ candidate: formattedCandidate }))
            ))
        ))
    ));

    createCandidateSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateSuccess),
        map(() => retrieveAllCandidates()),
        tap((action) => {
            sessionStorage.setItem("candidate", JSON.stringify(action))
            this.router.navigateByUrl('/questionario');
        })
    ));


    getAllCandidates$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidates),
        switchMap(() => this.retreiveAllCandidates().pipe(
            map((response) => initCandidates({ response }))
        ))
    ));

}