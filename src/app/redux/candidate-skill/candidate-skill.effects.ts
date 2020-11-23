import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { CandidateSkill } from '../../core/model/CandidateSkill.interface';
import { createCandidateSkill, retrieveAllCandidateSkills, initCandidateSkills } from './candidate-skill.actions';

@Injectable()
export class CandidateSkillsEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCandidates(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("candidateSkill/findAll")
    }

    createCandidateSkill(candidateSkill: CandidateSkill): Observable<Response> {
        return this.http.retrievePostCall<Response>("candidateSkill/create",  candidateSkill )
    }

    createCandidateSkill$ = createEffect(() => this.actions$.pipe(
        ofType(createCandidateSkill),
        switchMap(candidateSkill => this.createCandidateSkill(candidateSkill.candidateSkill).pipe(
            map(() => retrieveAllCandidateSkills(),
            )
        ))
    ));

    getAllCandidates$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCandidateSkills),
        switchMap(() => this.retreiveAllCandidates().pipe(
            map((response) => initCandidateSkills({ response }))
        ))
    ));

}