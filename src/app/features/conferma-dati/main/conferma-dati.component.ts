import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { selectSeniorities } from 'src/app/redux/seniority';
import { selectSkills } from 'src/app/redux/skill';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { ConfermaDatiService } from '../services/conferma-dati.service';
import { Skill } from 'src/app/core/model/Skill.interface';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { CandidateSkill } from 'src/app/core/model/CandidateSkill.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conferma-dati',
  templateUrl: './conferma-dati.component.html',
  styleUrls: ['./conferma-dati.component.scss']
})
export class ConfermaDatiComponent implements OnInit {

  candidateForm: FormGroup;
  skill = new FormControl();
  idCandidate: number;

  constructor(private store: Store, private confermaDatiService: ConfermaDatiService, private fb: FormBuilder, private router: Router) {

  }


  keyPressAlpha(event) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  ngOnInit(): void {
    this.confermaDatiService.retrieveAllSkills();
    this.confermaDatiService.retrieveAllSeniorities();

    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idSeniority: ['', Validators.required],
    })

  }

  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }

  get seniorities(): Observable<Seniority[]> {
    return this.store.pipe(select(selectSeniorities));
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async goCandidate() {
    let candidate: Candidate = {
      ...this.candidateForm.value
    }
    console.log(candidate)
    this.confermaDatiService.createCandidate(candidate);
    await this.delay(50);
    this.selectCurrentCandidate();
  }

  selectCurrentCandidate() {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate) => { return this.idCandidate = candidate.id });
    console.log(this.idCandidate)
    this.createCandidateSkill()
  }

  createCandidateSkill() {
    
    for (let idSkill of this.skill.value) {
      let candSkill: CandidateSkill = {
        idCandidate: this.idCandidate,
        idSkill: idSkill
      }
      this.confermaDatiService.createCandidateSkill(candSkill)
    }
  }

  goToQuestionario() {    
    this.router.navigateByUrl('/questionario');
  }
 
}