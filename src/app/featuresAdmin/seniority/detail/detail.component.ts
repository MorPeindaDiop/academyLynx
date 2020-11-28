import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { getCurrentNavigatedSeniority } from 'src/app/redux/seniority';
import { SeniorityService } from '../services/seniority.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  seniorityForm: FormGroup;
  seniority: Seniority;

  constructor(private store: Store, private fb: FormBuilder, private seniorityService: SeniorityService, private router: Router) {
    this.store.pipe(select(getCurrentNavigatedSeniority)).subscribe((seniority => this.seniority = seniority));
    
    this.seniorityForm = this.fb.group({
      id: ['', Validators.required],
      level: ['', Validators.required],
      description: ['', Validators.required],
      minDifficulty: ['', Validators.required],
      maxDifficulty: ['', Validators.required]
    })

    this.seniorityForm.patchValue({
      id: this.seniority.id,
      level: this.seniority.level,
      description: this.seniority.description,
      minDifficulty: this.seniority.minDifficulty,
      maxDifficulty: this.seniority.maxDifficulty,
    });
  }
  
  get currentSeniority(): Observable<Seniority> {
    return this.store.pipe(select(getCurrentNavigatedSeniority));
  }

  ngOnInit(): void {
    
  }

  save() {
    let editSeniority: Seniority = {
      ...this.seniorityForm.value
    }
    this.seniorityService.createSeniority(editSeniority);
    this.router.navigateByUrl('/admin/seniority');
  }

}
