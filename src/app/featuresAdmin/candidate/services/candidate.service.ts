import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { TestQuestion } from 'src/app/core/model/TestQuestion.interface';
import { createCandidate, deleteCandidate, retrieveAllCandidates } from 'src/app/redux/candidate/candidate.actions';
import { createTest } from 'src/app/redux/test-question/test-question.actions';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private store: Store) { }

  retrieveAllCandidates() {
    this.store.dispatch(retrieveAllCandidates())
  }

  createCandidate(candidate: Candidate) {
    this.store.dispatch(createCandidate({candidate}))
  }

  deleteCandidate(idCandidate : number) {
    this.store.dispatch(deleteCandidate({idCandidate}))
  }

  createTest(test: TestQuestion) {
    this.store.dispatch(createTest({test}))
  }

}
