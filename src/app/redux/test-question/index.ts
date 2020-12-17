import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { TestsState } from './test-question.reducers';


export const selectTestState = (state: AppState) => state.testsState;

export const selectTests = createSelector(
    selectTestState,
    (state: TestsState) => state.tests
);

// export const getCurrentUser = createSelector(
//     selectUsersState,
//     (state: UsersState) => state.currentUser
// );

// export const selectErrorMessage = createSelector(
//     selectUsersState,
//     (state: UsersState) => state.errorMessage
// );