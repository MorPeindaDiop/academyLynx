import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Skill } from 'src/app/core/model/Skill.interface';
import { createSkill, retrieveAllSkills } from 'src/app/redux/skill/skill.actions';

@Injectable()
export class SkillService {

  constructor(private store: Store) { }

  retrieveAllSkills() {
    this.store.dispatch(retrieveAllSkills())
  }

  createSkill(skill: Skill) {
    this.store.dispatch(createSkill({skill}))
  }

}
