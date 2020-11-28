import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { createQuestion, deleteQuestion, initQuestions, retrieveAllQuestions } from './question.actions';
import { Question } from 'src/app/core/model/Question.interface';

@Injectable()
export class QuestionsEffects{
    
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retreiveAllQuestions():Observable<Response>{
        return this.http.retrieveGetCall<Response>("question/findAll")
    }

    createQuestion(question: Question): Observable<Response> {
        return this.http.retrievePostCall<Response>("question/create", question)
    }

    deleteQuestion(id: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("question/delete", id)
    }

    getAllQuestions$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllQuestions),
        switchMap(() => this.retreiveAllQuestions().pipe(
            map((response) => initQuestions({response}))
        ))
    ));

    createQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(createQuestion),
        switchMap(question => this.createQuestion(question.question).pipe(
            map(() => retrieveAllQuestions()),
            )
        ))
    );

    deleteQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(deleteQuestion),
        switchMap(id => this.deleteQuestion(id.id).pipe(
            map(() => retrieveAllQuestions()),
            )
        ))
    );

}