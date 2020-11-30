import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CandidateSkillsState } from './candidate-skill.reducers';

export const selectCandidateSkillsState = (state: AppState) => state.candidateSkillsState;

export const selectCandidates = createSelector(
    selectCandidateSkillsState,
    (state: CandidateSkillsState) => state.candidateSkills
);

export const getCurrentCandidateSkill = createSelector(
    selectCandidateSkillsState,
    (state: CandidateSkillsState) => state.currentCandidateSkill
);