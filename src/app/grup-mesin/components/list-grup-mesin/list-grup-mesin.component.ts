import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-grup-mesin',
  templateUrl: './list-grup-mesin.component.html',
  styleUrl: './list-grup-mesin.component.css'
})
export class ListGrupMesinComponent {

  constructor(private router: Router) {}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'grup-mesin', 'form-grup-mesin'], {queryParams:{action:'add'}})
    }
  }
}
