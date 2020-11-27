import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './main/skill.component';
import { SkillService } from './services/skill.service';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SkillComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SkillRoutingModule,
    SharedModule
  ],
  providers: [
    SkillService
  ],
})
export class SkillModule { }
