import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './main/skill.component';
import { SkillService } from './services/skill.service';


@NgModule({
  declarations: [SkillComponent],
  imports: [
    CommonModule,
    SkillRoutingModule
  ],
  providers: [
    SkillService
  ],
})
export class SkillModule { }
