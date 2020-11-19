import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';
import { Response } from 'src/app/core/model/Response';
import { Seniority } from 'src/app/core/model/Seniority';
import { Skill } from 'src/app/core/model/Skill';
import { selectSeniorities } from 'src/app/redux/seniority';
import { selectSkills } from 'src/app/redux/skill';
import { ConfermaDatiService } from '../services/conferma-dati.service';

@Component({
  selector: 'app-conferma-dati',
  templateUrl: './conferma-dati.component.html',
  styleUrls: ['./conferma-dati.component.scss']
})
export class ConfermaDatiComponent implements OnInit {
  skill1 = [];
  dropdownListSkill = [];
  dropdownListSeniority = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  isDropdown = false;
  //skills : Observable < Response > ;
  dbSkill = [];
  senioritys: Observable<Response>;
  dbSeniority = [];

  skill = new FormControl();

  constructor(private store: Store, private http: HttpCommunicationsService, private confermaDatiService: ConfermaDatiService) {

  }

  ngOnInit(): void {
    this.confermaDatiService.retrieveAllSkills();
    this.confermaDatiService.retrieveAllSeniorities();

  }

  get skills(): Observable<Skill[]> {
    return this.store.pipe(select(selectSkills));
  }

  get seniorities(): Observable<Seniority[]> {
    return this.store.pipe(select(selectSeniorities));
  }


  // richiesta() {

  //   this.skills=this.http.retrieveGetCall< Response >("skill/findAll");
  //   this.skills.pipe().subscribe((skill) =>
  //     skill.result.forEach((item)=> this.dropdownListSkill.push(item))
  //     );
  //   console.log("this.dropdownListSkill nel costruttore");
  //   console.log(this.dropdownListSkill);

  //   this.senioritys=this.http.retrieveGetCall< Response >("seniority/findAll");
  //   this.senioritys.pipe().subscribe((seniority) =>
  //     seniority.result.forEach((item)=> this.dropdownListSeniority.push(item)),
  //     );
  //   console.log("this.dropdownListSeniority nel costruttore");
  //   console.log(this.dropdownListSeniority);

  // }

  // cicloFor() : Promise<any> {
  //   return new Promise((resolve) => {
  //     console.log("ciclo for");
  //     for(let i=0; i<this.dropdownListSkill.length;i+3){
  //       this.skill1.push([this.dropdownListSkill[i],this.dropdownListSkill[i+1]]);
  //       console.log("ciao");
  //       console.log(this.skill1);
  //     }
  //     console.log("fine ciclo for");
  //       resolve(this.skill1)
  //     }
  //   );

  // }


}
