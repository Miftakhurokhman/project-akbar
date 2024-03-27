import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-mesin',
  templateUrl: './list-mesin.component.html',
  styleUrl: './list-mesin.component.css'
})
export class ListMesinComponent {

  constructor(private router:Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/mesin', 'add-mesin'], {queryParams:{action:'add'}})
    }
  }
} 
