import { Action, createReducer, on } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate';
import { Response } from 'src/app/core/model/Response';
import { initCandidates } from './candidate.actions';

export interface CandidatesState {
    candidates: Candidate[];
    error: String;
}

export const initialState: CandidatesState = {
    candidates: [],
    error: ""
};

export const candidatesReducer = createReducer(
    initialState,
    on(initCandidates, (state, { response }) => ( { ...state, candidates: response.result, error: response.error } )),
    );

export function reducer(state: CandidatesState , action: Action) {
    return candidatesReducer(state, action);
}
