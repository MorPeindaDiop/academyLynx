import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { Seniority } from 'src/app/core/model/Seniority.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectCandidatesSkill } from 'src/app/redux/candidate-skill';
import { selectQuestions } from 'src/app/redux/question';
import { selectSeniorities } from 'src/app/redux/seniority';
import jsPDF, * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.scss']
})
export class RisultatoComponent implements OnInit {

  candidate: Candidate;
  seniority: Seniority;
  nQuestion: number = 0;
  candidateSkills: number[] = [];

  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate) => { return this.candidate = candidate; })

    this.store.pipe(select(selectCandidatesSkill)).subscribe((candidateSkills) => {
      for (let candidateSkill of candidateSkills) {
        if (candidateSkill.idCandidate == this.candidate.id) {
          this.candidateSkills.push(candidateSkill.idSkill)
        }
      }
    })

    

    this.store.pipe(select(selectSeniorities)).subscribe((seniorities) => { 
      for (let seniority of seniorities) {
        if (seniority.id == this.candidate.idSeniority) {
          return this.seniority = seniority;
        }
      }
    })

    this.store.pipe(select(selectQuestions)).subscribe((question) => {
      for (let item of question) {
        for (let idSkill of this.candidateSkills) {
          if (item.difficulty >= this.seniority.minDifficulty && item.difficulty <= this.seniority.maxDifficulty && item.idSkill == idSkill) {
            this.nQuestion += 1
          }
        }
      }
    });
  }

  goToLogin() {    
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  download(){
    var element =document.getElementById('table');
    html2canvas(element).then((canvas)=>{
      console.log(canvas);

      var imgData=canvas.toDataURL('image/jpeg');
      //var doc =new jsPDF("p", "mm", "a4");
      var doc =new jsPDF();
      var imgHeight = canvas.height * 208 / canvas.width;
      //doc.addImage(imgData,0,0,208,imgHeight);
      //var width = doc.internal.pageSize.getWidth();
      //var height = doc.internal.pageSize.getHeight();
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("risultato.pdf");
    })
  }

  ngOnInit(): void { }
}
