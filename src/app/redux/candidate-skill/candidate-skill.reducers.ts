import { Action, createReducer, on } from '@ngrx/store';
import { CandidateSkill } from '../../core/model/CandidateSkill.interface';
import { initCandidateSkills } from './candidate-skill.actions';

export interface CandidateSkillsState {
    candidateSkills: CandidateSkill[];
    currentCandidateSkill: CandidateSkill[];
    error: String;
}

export const initialState: CandidateSkillsState = {
    candidateSkills: [],
    currentCandidateSkill: null,
    error: ""
};

export const candidateSkillsReducer = createReducer(
    initialState,
    on(initCandidateSkills, (state, { response }) => ({ ...state, candidateSkills: response.result, error: response.error })),
);

export function reducer(state: CandidateSkillsState, action: Action) {
    return candidateSkillsReducer(state, action);
}
