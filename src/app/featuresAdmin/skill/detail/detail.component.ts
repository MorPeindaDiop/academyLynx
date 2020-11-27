import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/model/Skill.interface';
import { getCurrentNavigatedSkill } from 'src/app/redux/skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  skillForm: FormGroup;
  skill: Skill;

  constructor(private store: Store, private fb: FormBuilder, private skillService: SkillService) {
    this.store.pipe(select(getCurrentNavigatedSkill)).subscribe((skill => this.skill = skill));
    
    this.skillForm = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  
  get currentSkill(): Observable<Skill> {
    return this.store.pipe(select(getCurrentNavigatedSkill));
  }

  ngOnInit(): void {
    
  }

  save() {
    let editSkill: Skill = {
      ...this.skillForm.value
    }
    this.skillService.createSkill(editSkill);
  }

}
