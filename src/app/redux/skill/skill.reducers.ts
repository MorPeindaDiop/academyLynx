import { Action, createReducer, on } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';
import { Skill } from 'src/app/core/model/Skill';
import { initSkills, retrieveAllSkills } from './skill.actions';

export interface SkillsState {
    skills: Skill[];
}

export const initialState: SkillsState = {
    skills: []
};

export const skillsReducer = createReducer(
    initialState,
    on(initSkills, (state, { response }) => ( { ...state, skills: response.result } )),
    );

export function reducer(state: SkillsState , action: Action) {
    return skillsReducer(state, action);
}