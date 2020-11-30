import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/model/Skill.interface';
import { selectSkills } from 'src/app/redux/skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor(private store: Store, private skillService: SkillService) {
  }
  
  ngOnInit(): void {
    this.skillService.retrieveAllSkills();
  }

  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }

  delete(id: number) {
    this.skillService.deleteSkill(id)
  }

}
