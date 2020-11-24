import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOptionModule,  } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NgbModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatOptionModule,
    QuestionComponent
  ]
})
export class SharedModule { }
