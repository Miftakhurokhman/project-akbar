import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-gedung',
  templateUrl: './list-gedung.component.html',
  styleUrls: ['./list-gedung.component.css']
})
export class ListGedungComponent {
  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'gedung', 'form-gedung'], {queryParams:{action:'add'}})
    }
  }
}