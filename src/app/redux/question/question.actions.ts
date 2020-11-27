import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/core/model/Question';
import { Response } from '../../core/model/Response.interface';

//all questions
export const retrieveAllQuestions = createAction('[Question] questions');
export const initQuestions = createAction('[Question] init questions', props<{response: Response}>());

//create question
export const createQuestion = createAction('[Question] create question', props<{question: Question}>());

//delete question
export const deleteQuestion = createAction('[Question] delete question', props<{id: number}>());