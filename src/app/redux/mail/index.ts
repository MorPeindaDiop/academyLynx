import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { MailState } from './mail.reducers';

export const selectMailState = (state: AppState) => state.mailState;

export const selectMailError = createSelector(
    selectMailState,
    (state: MailState) => state.response.error
    
);

export const selectMailSuccess = createSelector(
    selectMailState,
    (state: MailState) => state.response.result
);