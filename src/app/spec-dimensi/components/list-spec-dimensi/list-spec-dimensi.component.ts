import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-spec-dimensi',
  templateUrl: './list-spec-dimensi.component.html',
  styleUrl: './list-spec-dimensi.component.css'
})
export class ListSpecDimensiComponent {
  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'spec-dimensi', 'form-spec-dimensi'], {queryParams:{action:'add'}})
    }
  }
}
