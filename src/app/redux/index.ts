import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { skillsReducer, SkillsState } from './skill/skill.reducers';
import { Seniority } from '../core/model/Seniority';
import { senioritiesReducer, SenioritiesState } from './seniority/seniority.reducers';
import { candidatesReducer, CandidatesState } from './Candidate/candidate.reducers';

export interface AppState {
    router: RouterReducerState<any>;
    skillsState: SkillsState;
    senioritiesState: SenioritiesState;
    candidatesState: CandidatesState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    skillsState: skillsReducer,
    senioritiesState: senioritiesReducer,
    candidatesState: candidatesReducer,
};