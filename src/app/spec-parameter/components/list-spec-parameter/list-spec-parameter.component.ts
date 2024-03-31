import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-spec-parameter',
  templateUrl: './list-spec-parameter.component.html',
  styleUrl: './list-spec-parameter.component.css'
})
export class ListSpecParameterComponent {
  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'spec-parameter', 'form-spec-parameter'], {queryParams:{action:'add'}})
    }
  }
}
