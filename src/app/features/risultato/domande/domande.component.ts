import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-domande',
  templateUrl: './domande.component.html',
  styleUrls: ['./domande.component.scss']
})
export class DomandeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
