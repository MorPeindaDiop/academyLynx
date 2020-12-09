import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { UsersState } from './login.reducers';


export const selectUsersState = (state: AppState) => state.usersState;

export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.users
);

export const getCurrentNavigatedSkill = createSelector(
    selectUsersState,
    selectRouteParams,
    (state: UsersState, params: Params) => state.users.find(item => item.id === Number(params['id']))
);