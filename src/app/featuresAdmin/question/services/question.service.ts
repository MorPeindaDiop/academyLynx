import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/core/model/Question';
import { createQuestion, deleteQuestion, retrieveAllQuestions } from 'src/app/redux/question/question.actions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private store: Store) { }

  retrieveAllQuestions() {
    this.store.dispatch(retrieveAllQuestions())
  }

  createQuestion(question: Question) {
    this.store.dispatch(createQuestion({question}))
  }

  deleteQuestion(id : number) {
    this.store.dispatch(deleteQuestion({id}))
  }
}
