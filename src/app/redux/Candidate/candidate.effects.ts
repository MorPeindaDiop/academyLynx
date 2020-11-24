import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { retrieveAllCandidates, initCandidates, createCandidate, createCandidateSuccess } from './candidate.actions';
import { Candidate } from 'src/app/core/model/Candidate.interface';

@Injectable()
export class CandidatesEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidates(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidate/findAll")
    }

    createCandidate(candidate: Candidate): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidate/create",  candidate )
    }

   

    // createCandidate$ = createEffect(() => this.actions$.pipe(
    //     ofType(createCandidate),
    //     switchMap(candidate => this.createCandidate(candidate.candidate).pipe(
    //         map(() => retrieveAllCandidates()),
    //         tap((action) => {
    //             sessionStorage.setItem("candidate", JSON.stringify(action));
    //             this.router.navigateByUrl('/questionario');
    //             console.log("candidate effects")
    //             console.log(candidate)
    //         }))
    //     ))
    // );

    createCandidate$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidate),
        switchMap(candidate => this.createCandidate(candidate.candidate).pipe(
            map((response) => createCandidateSuccess({response})),
            )
        ))
    );

    createCandidateSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateSuccess),
        map(() => retrieveAllCandidates()),
            tap((action) => {
                sessionStorage.setItem("candidate", JSON.stringify(action));
                this.router.navigateByUrl('/questionario');
            }))
        
    );



    getAllCandidates$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidates),
        switchMap(() => this.retreiveAllCandidates().pipe(
            map((response) => initCandidates({ response }))
        ))
    ));


    getLastCandidate$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidates),
        switchMap(() => this.retreiveAllCandidates().pipe(
            map((response) => initCandidates({ response }))
        ))
    ));


   
}