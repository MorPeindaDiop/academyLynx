import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Field } from 'src/app/core/model/Field.interface';
import { getCurrentNavigatedField } from 'src/app/redux/field';
import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  fieldForm: FormGroup;
  field: Field;

  constructor(private store: Store, private fb: FormBuilder, private fieldService: FieldService, private router: Router) {
    this.store.pipe(select(getCurrentNavigatedField)).subscribe((field => this.field = field));
    
    this.fieldForm = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      reg_exp: ['', Validators.required],
      enabled: ['', Validators.required]
    })

    this.fieldForm.patchValue({
      id: this.field.id,
      description: this.field.description,
      reg_exp: this.field.reg_exp,
      enabled: this.field.enabled,
    });
  }

  ngOnInit(): void {
    
  }

  save() {
    let editField: Field = {
      ...this.fieldForm.value
    }
    this.fieldService.createField(editField);
    this.router.navigateByUrl('/admin/field');
  }

}
