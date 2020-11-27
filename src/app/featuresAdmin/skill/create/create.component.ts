import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skill } from 'src/app/core/model/Skill.interface';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  skillForm: FormGroup;

  constructor(private fb: FormBuilder, private skillService: SkillService, private router: Router) {

    this.skillForm = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  save() {
    let editSkill: Skill = {
      ...this.skillForm.value
    }
    this.skillService.createSkill(editSkill);
    this.router.navigateByUrl('/admin/skill');
  }

}
