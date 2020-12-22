import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/model/User.interface';
import { initUser, loginUserFailure } from './login.actions';


export interface UsersState{
    currentUser: User;
    errorMessage: string | null;
}


export const initalState: UsersState={
    currentUser: null,
    errorMessage: null,
}


export const userReducer= createReducer(
    initalState,
    on(initUser, (state, { user }) => ( { ...state, currentUser: user } )),
    on(loginUserFailure, (state, {error}) => ({...state, user: null, errorMessage: error})),
    );

    export function reducer(state: UsersState , action: Action) {
        return userReducer(state, action);
    }