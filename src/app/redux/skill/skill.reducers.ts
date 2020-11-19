import { Action, createReducer, on } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response';
import { Skill } from 'src/app/core/model/Skill';
import { initSkills, retrieveAllSkills } from './skill.actions';

export interface SkillsState {
    response: Response;
    skills: Skill[];
}

export const initialState: SkillsState = {
    response: null, 
    skills: []
};

export const skillsReducer = createReducer(
    initialState,
    on(initSkills, (state, { response }) => ( { ...state, response: response, skills: response.result } )),
    );

export function reducer(state: SkillsState , action: Action) {
    return skillsReducer(state, action);
}