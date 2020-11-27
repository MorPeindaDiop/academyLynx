import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.scss']
})
export class RisultatoComponent implements OnInit {

  idCandidate: number;
  arithmeticScore: number;
  weightedScore: number;
  candidate: Candidate;

  constructor(private store: Store) {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.candidate = candidate; });
  }

  ngOnInit(): void { }
}
