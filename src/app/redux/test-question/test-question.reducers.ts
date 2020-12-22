import { createReducer, Action, on } from "@ngrx/store";
import { TestQuestion } from "src/app/core/model/TestQuestion.interface";
import { initTests } from "./test-question.actions";

export interface TestsState {
    tests: TestQuestion[];
}

export const initialState: TestsState = {
    tests: []
};

export const testsReducer = createReducer(
    initialState,
    on(initTests, (state, { response }) => ( { ...state, tests: response.result } )),
    );

export function reducer(state: TestsState , action: Action) {
    return testsReducer(state, action);
}