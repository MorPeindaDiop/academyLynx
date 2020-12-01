import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { selectSeniorities } from 'src/app/redux/seniority';
import { SeniorityService } from '../services/seniority.service';

@Component({
  selector: 'app-seniority',
  templateUrl: './seniority.component.html',
  styleUrls: ['./seniority.component.scss']
})
export class SeniorityComponent implements OnInit {

  constructor(private store: Store, private seniorityService: SeniorityService) {
  }
  
  ngOnInit(): void {
    this.seniorityService.retrieveAllSeniorities();
  }

  get seniorities(): Observable<Seniority[]> {
    return this.store.pipe(select(selectSeniorities));
  }

  delete(id: number) {
    this.seniorityService.deleteSeniority(id)
  }

}
