import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { Question } from 'src/app/core/model/Question';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectQuestions } from 'src/app/redux/question';

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
  nQuestion: number;

  constructor(private store: Store) {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.candidate = candidate; });
    console.log( /**/  this.store.pipe(select(selectQuestions)).subscribe((domanda)=>{return this.nQuestion=domanda.length;}) /**/  );
  }

  ngOnInit(): void { }
}
