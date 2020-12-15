import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/core/model/Response.interface';
import { TestQuestion } from 'src/app/core/model/TestQuestion.interface';

//all tests
export const retrieveAllTests = createAction('[Test] tests');
export const initTests = createAction('[Test] init tests', props<{response: Response}>());

//create test
export const createTest = createAction('[Test] create test', props<{test: TestQuestion}>());

//delete test
export const deleteTest = createAction('[Test] delete test', props<{id: number}>());