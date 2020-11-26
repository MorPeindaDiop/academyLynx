import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCandidateScore } from 'src/app/redux/candidate/candidate.actions';

@Injectable({
  providedIn: 'root'
})
export class RisultatoService {

  constructor(private store: Store) { }

  // setScoreCandidate(idCandidate: number) {
  //   this.store.dispatch(setCandidateScore({idCandidate}))
  // }
}
