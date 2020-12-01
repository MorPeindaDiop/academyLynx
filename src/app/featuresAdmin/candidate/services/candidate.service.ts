import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { createCandidate, deleteCandidate, retrieveAllCandidates } from 'src/app/redux/candidate/candidate.actions';

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

}
