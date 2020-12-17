import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { initUser, initUserCandidate, loginUser, loginUserCandidate, loginUserCandidateSuccess, loginUserCanidateFailure, loginUserFailure, loginUserSuccess } from './login.actions';


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
     
    signInUser(username: string, password: string): Observable<Response> {
      return this.http.retrievePostCall<Response>('user/signIn', {username, password});
    }
    signInCandidate(username: string, password: string, idCandidate:string): Observable<Response> {
      return this.http.retrievePostCall<Response>('candidate/signIn', {username, password, idCandidate});
    }
    
    // loginUser$=createEffect(()=>this.actions$.pipe(
    //   ofType(loginUser),
    //   switchMap(action => this.signInUser(action.username, action.password).pipe(
    //     map( response => initUser({ response }))
    //     ))
    //   ));

    // loginUser$=createEffect(()=>this.actions$.pipe(
    //   ofType(loginUser),
    //   switchMap(action => this.signInUser(action.username, action.password).pipe(
    //     map( response => initUser({ response }))
        
    //     )),
        
    //   ));
      
    loginUser$=createEffect(()=>this.actions$.pipe(
      ofType(loginUser),
      switchMap(action => this.signInUser(action.username, action.password).pipe(
          map( response=>{
            if(response.result === null){
              return loginUserFailure({error:'Username e/o Password non corretta'})
            }else{
              return loginUserSuccess({user: response.result})
            }
          })
        ))
      ));
  
    loginUserSuccess$=createEffect(()=>this.actions$.pipe(
      ofType(loginUserSuccess),
      map( (action) => initUser( {user: action.user} )),
      tap(()=>this.router.navigateByUrl('/admin/panel'))
    ));


    // candidate login

    loginUserCandidate$=createEffect(()=>this.actions$.pipe(
      ofType(loginUserCandidate),
      switchMap(action => this.signInCandidate(action.username, action.password, action.idCandidate).pipe(
          map( response=>{
            if(response.result === null){
              return loginUserCanidateFailure({error:'Username e/o Password non corretta'})
            }else{
              return loginUserCandidateSuccess({candidate: response.result})
            }
          })
        ))
      ));
  
      loginUserCandidateSuccess$=createEffect(()=>this.actions$.pipe(
      ofType(loginUserCandidateSuccess),
      map( (action) => initUserCandidate( {candidate: action.candidate} )),
      tap(()=>this.router.navigateByUrl('/questionario'))
    ));
      
}