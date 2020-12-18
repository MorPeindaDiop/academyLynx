import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllCandidateAnswers, retrieveCandidateAnswersByIdCandidate } from 'src/app/redux/candidate-answer/candidate-answer.actions';

@Injectable({
  providedIn: 'root'
})
export class RisultatoService {

  constructor(private store: Store) { }
  
  retrieveCandidateAnswersByIdCandidate(idCandidate: number) {
    this.store.dispatch(retrieveCandidateAnswersByIdCandidate({idCandidate}));
  }

}
