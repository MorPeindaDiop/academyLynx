import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { SkillsState } from './skill.reducers';

export const selectSkillsState = (state: AppState) => state.skillsState;

export const selectSkills = createSelector(
    selectSkillsState,
    (state: SkillsState) => state.skills
);

export const getCurrentNavigatedSkill = createSelector(
    selectSkillsState,
    selectRouteParams,
    (state: SkillsState, params: Params) => state.skills.find(item => item.id === Number(params['id']))
);