import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { initQuestions, retrieveAllQuestions } from './question.actions';

@Injectable()
export class QuestionsEffects{
    
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllQuestions():Observable<Response>{
        return this.http.retrieveGetCall<Response>("question/findAll")
    }

    getAllQuestions$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllQuestions),
        switchMap(() => this.retreiveAllQuestions().pipe(
            map((response) => initQuestions({response}))
        ))
    ));

}