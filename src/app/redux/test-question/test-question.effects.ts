import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { TestQuestion } from 'src/app/core/model/TestQuestion.interface';
import { createTest, initTests, retrieveAllTests, deleteTest } from './test-question.actions';

@Injectable()
export class TestsEffects{
    
    constructor(private actions$: Actions, private http: HttpCommunicationsService,private router: Router){}

    retrieveAllTests():Observable<Response>{
        return this.http.retrieveGetCall<Response>("testQuestion/findAll")
    }

    createTest(test: TestQuestion): Observable<Response> {
        return this.http.retrievePostCall<Response>("testQuestion/create", test)
    }

    deleteTest(id: number): Observable<Response> {
        return this.http.retrievePostCall<Response>("testQuestion/delete", id)
    }

    getAllTest$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllTests),
        switchMap(() => this.retrieveAllTests().pipe(
            map((response) => initTests({response}))
        ))
    ));

    createTest$ = createEffect(() => this.actions$.pipe(
        ofType(createTest),
        switchMap(test => this.createTest(test.test).pipe(
            map(() => retrieveAllTests()),
            )
        ))
    );

    deleteField$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTest),
        switchMap(id => this.deleteTest(id.id).pipe(
            map(() => retrieveAllTests()),
            )
        ))
    );

}