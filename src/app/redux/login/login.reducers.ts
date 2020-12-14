import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/model/User.interface';
import { initUser } from './login.actions';


export interface UsersState{
    currentUser: User;
}


export const initalState: UsersState={
    currentUser: null
}


export const userReducer= createReducer(
    initalState,
    on(initUser, (state, { response }) => ( { ...state, currentUser: response.result } )),
    );

    export function reducer(state: UsersState , action: Action) {
        return userReducer(state, action);
    }