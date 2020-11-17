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

  constructor(private http: HttpCommunicationsService) { }

  ngOnInit(): void {
   // this.isDropdown = true;
  

    this.skills=this.http.retrieveGetCall< Response >("skill/findAll");
    console.log(this.skills);
    this.skills.pipe().subscribe((skill) =>
      skill.result.forEach((item)=> this.dropdownListSkill.push(item)),
      );

    console.log(this.dropdownListSkill);
      
    this.senioritys=this.http.retrieveGetCall< Response >("seniority/findAll");
    console.log(this.senioritys);
    this.senioritys.pipe().subscribe((seniority) =>
      seniority.result.forEach((item)=> this.dropdownListSeniority.push(item)),
      );

    console.log(this.dropdownListSeniority);
    
  }

  identify1(index){
    if (index%3 == 0 ) {
      this.inizio = this.inizio+3;
      this.fine = this.fine+3;
    }
  }

  identify2(index){
    return index = index + 2;
  }

  identify3(index){
    return index = index + 4;
  }
  
  // getPost() {
  //   this.skills=this.http.retrieveGetCall< Response >("skill/findAll");
  //   console.log(this.skills);
  //   this.skills.pipe().subscribe((skill) =>
  //     skill.result.forEach((item)=> this.dbSkill.push(item)),
      
  //     );

  //     console.log(this.dbSkill);

      
  //   // this.skills.pipe(switchMap( async (skills) => skills.forEach((skill) => this.candidateAnswer.push("ciao") )));
  //   // console.log(this.candidateAnswer);
  //   //.subscribe(todo => { this.todo = todo; })
  //   //this.posts = this.http.get(this.ROOT_URL );s

  //   return JSON.stringify(this.dbSkill);
    
  // }
  // getPosts1(){
  //   this.senioritys=this.http.retrieveGetCall< Response >("seniority/findAll");
  //   console.log(this.senioritys);
  //   this.senioritys.pipe().subscribe((seniority) =>
  //     seniority.result.forEach((item)=> this.dbSeniority.push(item)),
      
  //     );

  //     console.log(this.dbSeniority);
  //     return JSON.stringify(this.dbSeniority);
  // }
}
