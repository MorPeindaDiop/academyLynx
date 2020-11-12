import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { CandidateAnswer } from 'src/app/core/model/CandidateAnswer';
import { Response } from 'src/app/core/model/Response';
import { Skill } from 'src/app/core/model/Skill';


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
  skills : Observable < Response > ;
  dbSkill = [];
  constructor(private http: HttpCommunicationsService) { }

  ngOnInit(): void {
    this.isDropdown = true;
    
    this.skills=this.http.retrieveGetCall< Response >("skill/findAll");
    console.log(this.skills);
    this.skills.pipe().subscribe((skill) =>
      skill.result.forEach((item)=> this.dropdownList.push({ item_id: item.id, item_text: item.description })),
      
      );

    console.log(this.dropdownList);

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Roma' },
    //   { item_id: 2, item_text: 'Milano' },
    //   { item_id: 3, item_text: 'Venezia' },
    //   { item_id: 4, item_text: 'Bologna' },
    //   { item_id: 5, item_text: 'Lecco' }
    // ];
    
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
  
  getPosts() {
    this.skills=this.http.retrieveGetCall< Response >("skill/findAll");
    console.log(this.skills);
    this.skills.pipe().subscribe((skill) =>
      skill.result.forEach((item)=> this.dbSkill.push(item)),
      
      );

      console.log(this.dbSkill);
    // this.skills.pipe(switchMap( async (skills) => skills.forEach((skill) => this.candidateAnswer.push("ciao") )));
    // console.log(this.candidateAnswer);
    //.subscribe(todo => { this.todo = todo; })
    //this.posts = this.http.get(this.ROOT_URL );s

    return JSON.stringify(this.dbSkill);
  }
  
}
