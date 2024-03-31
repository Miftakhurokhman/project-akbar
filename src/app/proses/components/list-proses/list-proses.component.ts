import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-proses',
  templateUrl: './list-proses.component.html',
  styleUrl: './list-proses.component.css'
})
export class ListProsesComponent {
  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'proses', 'form-proses'], {queryParams:{action:'add'}})
    }
  }
}
