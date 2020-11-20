import { Action, createReducer, on } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate';
import { Response } from 'src/app/core/model/Response';
import { initCandidates } from './candidate.actions';

export interface CandidatesState {
    response: Response;
    candidates: Candidate[];
}

export const initialState: CandidatesState = {
    response: null, 
    candidates: []
};

export const candidatesReducer = createReducer(
    initialState,
    on(initCandidates, (state, { response }) => ( { ...state, response: response, candidates: response.result } )),
    );

export function reducer(state: CandidatesState , action: Action) {
    return candidatesReducer(state, action);
}
