import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CandidatesState } from '../candidate/candidate.reducers';
import { UsersState } from './login.reducers';


export const selectUsersState = (state: AppState) => state.usersState;


export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUser
);

export const getCurrentUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUser
);


export const selectErrorMessage = createSelector(
    selectUsersState,
    (state: UsersState) => state.errorMessage
);