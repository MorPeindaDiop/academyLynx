import { Action, createReducer, on } from '@ngrx/store';
import { Skill } from 'src/app/core/model/Skill.interface';
import { initSkills } from './skill.actions';

export interface SkillsState {
    skills: Skill[];
}

export const initialState: SkillsState = {
    skills: []
};

export const skillsReducer = createReducer(
    initialState,
    on(initSkills, (state, { response }) => ({ ...state, skills: response.result })),
);

export function reducer(state: SkillsState, action: Action) {
    return skillsReducer(state, action);
}