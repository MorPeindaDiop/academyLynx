import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { RisultatoService } from '../services/risultato.service';

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

  constructor(private store: Store, private risultatoService: RisultatoService) {
    
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.candidate = candidate; });
    //this.risultatoService.setScoreCandidate(this.idCandidate);
    
   }

  ngOnInit(): void {
    
  }
}
