import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-mesin',
  templateUrl: './form-mesin.component.html',
  styleUrl: './form-mesin.component.css'
})
export class FormMesinComponent {

  constructor(private router:Router) {}

  openPage(pageName : string) {
    if (pageName ==="list-mesin") {
      this.router.navigate(['/mesin', 'list-mesin'])
    } else {
      
    }
  }
}
