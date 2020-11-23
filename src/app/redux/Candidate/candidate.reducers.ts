import { Action, createReducer, on } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate';
import { Response } from 'src/app/core/model/Response';
import { createCandidate, initCandidates } from './candidate.actions';

export interface CandidatesState {
    candidates: Candidate[];
    //candidate: Candidate;
    error: String;
}

export const initialState: CandidatesState = {
    candidates: [],
    //candidate: null,
    error: ""
};

export const candidatesReducer = createReducer(
    initialState,
    on(initCandidates, (state, { response }) => ( { ...state, candidates: response.result, error: response.error } )),
    //on(createCandidate, (state, { candidate }) => ( { ...state, candidate: candidate } )),
    );

export function reducer(state: CandidatesState , action: Action) {
    return candidatesReducer(state, action);
}
