import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { initSkills, retrieveAllSkills } from './skill.actions';

@Injectable()
export class SkillsEffects{
    
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllSkills():Observable<Response>{
        return this.http.retrieveGetCall<Response>("skill/findAll")
    }

    getAllSkills$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllSkills),
        switchMap(() => this.retreiveAllSkills().pipe(
            map((response) => initSkills({response}))
        ))
    ));

}