import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Response } from 'src/app/core/model/Response.interface';
import { initUsers, loginUser, loginUserFailure, loginUserSuccess, retrieveAllUsers } from './login.actions';
import { User } from 'src/app/core/model/User.interface';


@Injectable()
export class LoginEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllUsers(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("user/findAll")
    }
    
    formatUser(user: User): User{
        return {username: user.username, password: user.password} as User;
    }

    checkUserAccount(username:string,password:string,users){
        return users.find(actualUser=>actualUser.username === username && actualUser.password === password);
     }

  
    //magia
    
    loginUser$=createEffect(()=>this.actions$.pipe(
        ofType(loginUser),
        switchMap(action=>this.retreiveAllUsers().pipe(
          switchMap(users=>of(this.checkUserAccount(action.username,action.password,users)).pipe(
            map( user=>{
              if(typeof user === 'undefined'){
                return loginUserFailure({error:'username e/o password non corretta'})
              }else{
                return loginUserSuccess({user});
              }
            })
          ))
        ))
      ));
    
    loginUserSuccess$=createEffect(()=>this.actions$.pipe(
        ofType(loginUserSuccess),
        tap(action=>{
          console.log('salvo utente in sessione da auth.effects');
          sessionStorage.setItem("utente", JSON.stringify({username:action.user.username,id:action.user.id}))
        }),
        map( (action) => initUsers({ user: action.user })),
        tap(()=>this.router.navigateByUrl('/form'))
      ));
      
}