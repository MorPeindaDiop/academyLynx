import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectQuestions } from 'src/app/redux/question';
import { selectSeniorities } from 'src/app/redux/seniority';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.scss']
})
export class RisultatoComponent implements OnInit {

  candidate: Candidate;
  seniority: Seniority;
  nQuestion: number = 0;

  constructor(private store: Store) {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate) => { return this.candidate = candidate; })

    this.store.pipe(select(selectSeniorities)).subscribe((seniorities) => { 
      for (let seniority of seniorities) {
        if (seniority.id == this.candidate.idSeniority) {
          return this.seniority = seniority;
        }
      }
    })

    this.store.pipe(select(selectQuestions)).subscribe((question) => {
      for (let item of question) {
        if (item.difficulty >= this.seniority.minDifficulty && item.difficulty <= this.seniority.maxDifficulty) {
          this.nQuestion += 1
        }
      }
    });
  }

  ngOnInit(): void { }
}
