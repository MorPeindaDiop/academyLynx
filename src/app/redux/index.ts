import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { skillsReducer, SkillsState } from './skill/skill.reducers';
import { senioritiesReducer, SenioritiesState } from './seniority/seniority.reducers';
import { candidatesReducer, CandidatesState } from './candidate/candidate.reducers';
import { candidateSkillsReducer, CandidateSkillsState } from './candidate-skill/candidate-skill.reducers';

export interface AppState {
    questionsState: any;
    router: RouterReducerState<any>;
    skillsState: SkillsState;
    senioritiesState: SenioritiesState;
    candidatesState: CandidatesState;
    candidateSkillsState: CandidateSkillsState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    skillsState: skillsReducer,
    senioritiesState: senioritiesReducer,
    candidatesState: candidatesReducer,
    candidateSkillsState: candidateSkillsReducer
};