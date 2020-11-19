import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { skillsReducer, SkillsState } from './skill/skill.reducers';

export interface AppState {
    router: RouterReducerState<any>;
    skillsState: SkillsState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    skillsState: skillsReducer,
};