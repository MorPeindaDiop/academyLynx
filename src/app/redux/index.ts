import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { skillsReducer, SkillsState } from './skill/skill.reducers';
import { senioritiesReducer, SenioritiesState } from './seniority/seniority.reducers';
import { candidatesReducer, CandidatesState } from './candidate/candidate.reducers';
import { candidateSkillsReducer, CandidateSkillsState } from './candidate-skill/candidate-skill.reducers';
import { questionsReducer, QuestionsState } from './question/question.reducers';
import { candidateAnswersReducer, CandidateAnswersState } from './candidate-answer/candidate-answer.reducers';
import { fieldsReducer, FieldssState } from './field/field.reducers';
import { userReducer, UsersState } from './login/login.reducers';
import { mailReducer, MailState } from './mail/mail.reducers';
import { TestsState, testsReducer } from './test-question/test-question.reducers';

export interface AppState {
    router: RouterReducerState<any>;
    skillsState: SkillsState;
    senioritiesState: SenioritiesState;
    candidatesState: CandidatesState;
    candidateSkillsState: CandidateSkillsState;
    questionState: QuestionsState;
    candidateAnswersState: CandidateAnswersState;
    fieldsState: FieldssState;
    usersState: UsersState;
    mailState: MailState;
    testsState: TestsState;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    skillsState: skillsReducer,
    senioritiesState: senioritiesReducer,
    candidatesState: candidatesReducer,
    candidateSkillsState: candidateSkillsReducer,
    questionState: questionsReducer,
    candidateAnswersState: candidateAnswersReducer,
    fieldsState: fieldsReducer,
    usersState: userReducer,
    mailState: mailReducer,
    testsState: testsReducer,
};