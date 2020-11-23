import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/core/model/Candidate.interface';

import { selectSeniorities } from 'src/app/redux/seniority';
import { selectSkills } from 'src/app/redux/skill';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { ConfermaDatiService } from '../services/conferma-dati.service';
import { Skill } from 'src/app/core/model/Skill';
import { Seniority } from 'src/app/core/model/Seniority';
import { CandidateSkill } from 'src/app/core/model/CandidateSkill.interface';

@Component({
  selector: 'app-conferma-dati',
  templateUrl: './conferma-dati.component.html',
  styleUrls: ['./conferma-dati.component.scss']
})
export class ConfermaDatiComponent implements OnInit {
  
  candidateForm: FormGroup;
  skill = new FormControl();
  idCandidate: number;

  constructor(private store: Store, private confermaDatiService: ConfermaDatiService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.confermaDatiService.retrieveAllSkills();
    this.confermaDatiService.retrieveAllSeniorities();

    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      idSeniority: [new Number, Validators.required]
    })
  }
  
  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }
  
  get seniorities(): Observable<Seniority[]> {
    return this.store.pipe(select(selectSeniorities));
  }
  
  
  
  goCandidate(){
    let candidate: Candidate={
      ...this.candidateForm.value
    }
    console.log(candidate)
    this.confermaDatiService.createCandidate(candidate);

    //this.createCandidateSkill();
  }
  
  createCandidateSkill() {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.idCandidate = candidate.id});
    
    console.log(this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.idCandidate = candidate.id}))

    for (let idSkill of this.skill.value) {
      let candSkill: CandidateSkill = {
        idCandidate: this.idCandidate,
        idSkill: idSkill
      }
      this.confermaDatiService.createCandidateSkill(candSkill)
    }
    console.log(this.skill.value);
  }

}
