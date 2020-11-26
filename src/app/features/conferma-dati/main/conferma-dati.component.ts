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
import { numbers } from '@material/select';

@Component({
  selector: 'app-conferma-dati',
  templateUrl: './conferma-dati.component.html',
  styleUrls: ['./conferma-dati.component.scss']
})
export class ConfermaDatiComponent implements OnInit {

  candidateForm: FormGroup;
  skill = new FormControl();
  idCandidate: number;
  angForm: FormGroup;


  constructor(private store: Store, private confermaDatiService: ConfermaDatiService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ],
      // senioruty: ['', Validators.required ]
    });
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

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  async goCandidate(){
    let candidate: Candidate={
      ...this.candidateForm.value
    }
    console.log(candidate)
    this.confermaDatiService.createCandidate(candidate);
    await this.delay(5000);
    this.createCandidateSkill();
  }

  async createCandidateSkill() {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate)=> {return this.idCandidate = candidate.id});
    for (let idSkill of this.skill.value) {
      let candSkill: CandidateSkill = {
        idCandidate: this.idCandidate,
        idSkill: idSkill
      }
      this.confermaDatiService.createCandidateSkill(candSkill)
    }
  }

}
