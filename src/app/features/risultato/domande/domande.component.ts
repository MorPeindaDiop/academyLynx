import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Observable, Subscription } from 'rxjs';
import { Candidate } from 'src/app/core/model/Candidate.interface';
import { CandidateAnswer } from 'src/app/core/model/CandidateAnswer.interface';
import { Question } from 'src/app/core/model/Question.interface';
import { getCurrentCandidate } from 'src/app/redux/candidate';
import { selectCandidateAnswers, selectCurrentCandidateAnswers } from 'src/app/redux/candidate-answer';
import { selectQuestions } from 'src/app/redux/question';
import { RisultatoService } from '../services/risultato.service';

@Component({
  selector: 'app-domande',
  templateUrl: './domande.component.html',
  styleUrls: ['./domande.component.scss']
})
export class DomandeComponent implements OnInit {

  candidate: Candidate;
 

  constructor(private router: Router, private store: Store, private risultatoService: RisultatoService) {
    this.store.pipe(select(getCurrentCandidate)).subscribe((candidate) => { return this.candidate = candidate; })
    this.risultatoService.retrieveCandidateAnswersByIdCandidate(this.candidate.id);
  }

  ngOnInit(): void {
  }

  get currentCandidateAnswers(): Observable<CandidateAnswer[]> {
    return this.store.pipe(select(selectCurrentCandidateAnswers));
  }

  get questions(): Observable<Question[]> {
    return this.store.pipe(select(selectQuestions));
  }

  download(){
    var element =document.getElementById('table');
    html2canvas(element).then((canvas)=>{

      var imgData=canvas.toDataURL('image/jpeg');
      var doc =new jsPDF("p", "mm", "a4");
      var width = doc.internal.pageSize.getWidth();
      doc.addImage(imgData,'JPEG',0,0,width,208);
      doc.save("domande.pdf");
      
    })
  }

  goToLogin() {    
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
  
}
