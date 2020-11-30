import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { selectCandidates } from 'src/app/redux/candidate';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor(private store: Store, private candidateService: CandidateService) {
  }
  
  ngOnInit(): void {
    this.candidateService.retrieveAllCandidates();
  }

  get candidates(): Observable<Candidate[]> {
    return this.store.pipe(select(selectCandidates));
  }

  delete(id: number) {
    this.candidateService.deleteCandidate(id)
  }

}
