import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Field } from 'src/app/core/model/Field.interface';
import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fieldForm: FormGroup;
  
  constructor(private fb: FormBuilder, private fieldService: FieldService, private router: Router) {

    this.fieldForm = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      reg_exp: ['', Validators.required],
      enabled: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save() {
    let field: Field = {
      ...this.fieldForm.value
    }
    this.fieldService.createField(field);
    this.router.navigateByUrl('/admin/field');
  }


}
