import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { SeniorityService } from '../services/seniority.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  seniorityForm: FormGroup;
  
  constructor(private fb: FormBuilder, private seniorityService: SeniorityService, private router: Router) {

    this.seniorityForm = this.fb.group({
      id: ['', Validators.required],
      level: ['', Validators.required],
      description: ['', Validators.required],
      minDifficulty: ['', Validators.required],
      maxDifficulty: ['', Validators.required]
    })
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
