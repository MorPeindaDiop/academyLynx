import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Candidate } from 'src/app/core/model/Candidate';
import { Response } from 'src/app/core/model/Response';
import { Seniority } from 'src/app/core/model/Seniority';
import { Skill } from 'src/app/core/model/Skill';
import { selectSeniorities } from 'src/app/redux/seniority';
import { selectSkills } from 'src/app/redux/skill';
import { ConfermaDatiService } from '../services/conferma-dati.service';

@Component({
  selector: 'app-conferma-dati',
  templateUrl: './conferma-dati.component.html',
  styleUrls: ['./conferma-dati.component.scss']
})
export class ConfermaDatiComponent implements OnInit {
  
  candidateForm: FormGroup;
  skill = new FormControl();

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

  changeClient(event) {
    console.log(event);
  }
  
  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }
  
  get seniorities(): Observable<Seniority[]> {
    return this.store.pipe(select(selectSeniorities));
  }
  
  goCandidate(){
    console.log(this.skill);
    let candidate: Candidate={
      ...this.candidateForm.value
    }
    console.log(candidate)
    this.confermaDatiService.createCandidate(candidate);
  }

}
