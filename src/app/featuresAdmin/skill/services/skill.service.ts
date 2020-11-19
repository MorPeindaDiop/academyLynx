import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllSkills } from 'src/app/redux/skill/skill.actions';

@Injectable()
export class SkillService {

  constructor(private store: Store) { }

  retrieveAllSkills() {
    this.store.dispatch(retrieveAllSkills())
  }

}
