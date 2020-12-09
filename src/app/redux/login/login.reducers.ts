import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/model/User.interface';
import { initUsers } from './login.actions';


export interface UsersState{
    users:User[];
}


export const initalState: UsersState={
    users: []
}


export const userReducer= createReducer(
    initalState,
    on(initUsers, (state, { response }) => ( { ...state, fields: response.result } )),
    );

    export function reducer(state: UsersState , action: Action) {
        return userReducer(state, action);
    }