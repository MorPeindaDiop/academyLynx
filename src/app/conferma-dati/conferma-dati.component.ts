import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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

  constructor() { }

  ngOnInit(): void {
    this.isDropdown = true;

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
