import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { HttpCommunicationsService } from '../core/HttpCommunications/http-communications.service.spec';
import { CandidateAnswer } from '../core/model/CandidateAnswer';


@Component({
  selector: 'app-conferma-dati',
  templateUrl: './conferma-dati.component.html',
  styleUrls: ['./conferma-dati.component.scss']
})
export class ConfermaDatiComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  isDropdown = false;
  skill : Observable < CandidateAnswer[] >;
  constructor(private http: HttpCommunicationsService) { }

  ngOnInit(): void {
    this.isDropdown = true;
    this.skill=this.http.retrieveGetCall< CandidateAnswer[] >("candidateAnswer/findAll");

    this.dropdownList = [
      { item_id: 1, item_text: 'Roma' },
      { item_id: 2, item_text: 'Milano' },
      { item_id: 3, item_text: 'Venezia' },
      { item_id: 4, item_text: 'Bologna' },
      { item_id: 5, item_text: 'Lecco' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
