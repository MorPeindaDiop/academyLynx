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
  skill1 =[];
  dropdownListSkill = [];
  dropdownListSeniority = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  isDropdown = false;
  skills : Observable < Response > ;
  dbSkill = [];
  senioritys : Observable < Response > ;
  dbSeniority = [];

  inizio: number = 0;
  fine: number = 3;

  constructor(private http: HttpCommunicationsService) { 

  }

  async ngOnInit() {

  
    console.log("oninit");
    console.log("this.dropdownListSkill.length: ");
    console.log(this.dropdownListSkill.length);
    console.log(this.dropdownListSkill);

    await this.richiesta();
    
    // for(let i=0; i<this.dropdownListSkill.length;i+3){
      //   this.skill1.push([this.dropdownListSkill[i],this.dropdownListSkill[i+1]]);
      //   console.log("this.skill1 nel for");
      //   console.log(this.skill1);
      // }
      
      console.log("richiamo await");
      await this.cicloFor();
      
      console.log("this.skill1 nell'oninit");
      console.log(this.skill1);
      
      
    }

    richiesta() {

      this.skills=this.http.retrieveGetCall< Response >("skill/findAll");
      this.skills.pipe().subscribe((skill) =>
        skill.result.forEach((item)=> this.dropdownListSkill.push(item))
        );
      console.log("this.dropdownListSkill nel costruttore");
      console.log(this.dropdownListSkill);
  
      this.senioritys=this.http.retrieveGetCall< Response >("seniority/findAll");
      this.senioritys.pipe().subscribe((seniority) =>
        seniority.result.forEach((item)=> this.dropdownListSeniority.push(item)),
        );
      console.log("this.dropdownListSeniority nel costruttore");
      console.log(this.dropdownListSeniority);
  
    }
    
    cicloFor() : Promise<any> {
      return new Promise((resolve) => {
        console.log("ciclo for");
        for(let i=0; i<this.dropdownListSkill.length;i+3){
          this.skill1.push([this.dropdownListSkill[i],this.dropdownListSkill[i+1]]);
          console.log("ciao");
          console.log(this.skill1);
        }
        console.log("fine ciclo for");
          resolve(this.skill1)
        }
      );
    
  }
  

}
