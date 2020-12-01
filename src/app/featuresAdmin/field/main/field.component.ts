import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/core/model/Field.interface';
import { FieldService } from '../services/field.service';
import { selectFields } from 'src/app/redux/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  constructor(private store: Store, private fieldService: FieldService) {
  }
  
  ngOnInit(): void {
    this.fieldService.retrieveAllFields();
  }

  get fields(): Observable<Field[]> {
    return this.store.pipe(select(selectFields));
  }

  changeEnable(field: Field) {
    //ssfield.enabled = !field.enabled;

    let newField: Field = {
      id: field.id,
      description: field.description,
      reg_exp: field.reg_exp,
      enabled: !field.enabled
    }
    this.fieldService.createField(newField);
  }

  delete(id: number) {
    this.fieldService.deleteField(id)
  }

}
