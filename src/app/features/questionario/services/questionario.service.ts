import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllQuestions } from 'src/app/redux/question/question.actions';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private store: Store) { }

  retrieveAllQuestions() {
    this.store.dispatch(retrieveAllQuestions())
  }



}
