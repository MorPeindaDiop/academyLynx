import { Params } from '@angular/router';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { userReducer, UsersState } from './login.reducers';


export const selectUsersState = (state: AppState) => state.usersState;

export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.users
);
