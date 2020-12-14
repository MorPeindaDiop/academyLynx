import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { initUser, loginUser } from './login.actions';


@Injectable()
export class LoginEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    // retreiveAllUsers(): Observable<Response> {
    //   return this.http.retrieveGetCall<Response>("user/findAll")
    // }
    
    // formatUser(user: User): User {
    //   return {username: user.username, password: user.password} as User;
    // }

    // checkUserAccount(username: string, password: string, users: User[]) {
    //   return users.find(actualUser=>actualUser.username === username && actualUser.password === password);
    // }
     
    
    // signInUser(username: string, password: string): Observable<Response> {
    //   return this.http.retrievePostCall<Response>('user/signIn', {username, password});
    // }

    signInUser(username: string, password: string): Observable<Response> {
      return this.http.retrievePostCall<Response>('user/signIn', {username, password});
    }
    
    // loginUser$=createEffect(()=>this.actions$.pipe(
    //   ofType(loginUser),
    //   switchMap(action => this.signInUser(action.username, action.password).pipe(
    //     map( response => initUser({ response }))
    //     ))
    //   ));

    loginUser$=createEffect(()=>this.actions$.pipe(
      ofType(loginUser),
      switchMap(action => this.signInUser(action.username, action.password).pipe(
        map( response => initUser({ response }))
        ))
      ));
    
    // loginUserSuccess$=createEffect(()=>this.actions$.pipe(
    //     ofType(loginUserSuccess),
    //     tap(action=>{
    //       console.log('salvo utente in sessione da auth.effects');
    //       sessionStorage.setItem("utente", JSON.stringify({username:action.user.username,id:action.user.id}))
    //     }),
    //     map( (action) => initUsers({ user: action.user })),
    //     tap(()=>this.router.navigateByUrl('/form'))
    //   ));
      
}