import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.component.html',
  styleUrls: ['./informazioni.component.scss']
})
export class InformazioniComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToQuestionario() {    
    this.router.navigateByUrl('/questionario');
  }
}
