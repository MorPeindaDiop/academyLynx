import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { skillsReducer, SkillsState } from './skill/skill.reducers';
import { senioritiesReducer, SenioritiesState } from './seniority/seniority.reducers';
import { candidatesReducer, CandidatesState } from './candidate/candidate.reducers';
import { candidateSkillsReducer, CandidateSkillsState } from './candidate-skill/candidate-skill.reducers';
import { questionsReducer, QuestionsState } from './question/question.reducers';
import { candidateAnswersReducer, CandidateAnswersState } from './candidate-answer/candidate-answer.reducers';
import { fieldsReducer, FieldssState } from './field/field.reducers';

export interface AppState {
    router: RouterReducerState<any>;
    skillsState: SkillsState;
    senioritiesState: SenioritiesState;
    candidatesState: CandidatesState;
    candidateSkillsState: CandidateSkillsState;
    questionState: QuestionsState;
    candidateAnswer: CandidateAnswersState;
    fieldsState: FieldssState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    skillsState: skillsReducer,
    senioritiesState: senioritiesReducer,
    candidatesState: candidatesReducer,
    candidateSkillsState: candidateSkillsReducer,
    questionState: questionsReducer,
    candidateAnswer: candidateAnswersReducer,
    fieldsState: fieldsReducer,
};