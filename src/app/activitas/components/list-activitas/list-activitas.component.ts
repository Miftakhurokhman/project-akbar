import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-activitas',
  templateUrl: './list-activitas.component.html',
  styleUrl: './list-activitas.component.css'
})
export class ListActivitasComponent {
  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'activitas', 'form-activitas'], {queryParams:{action:'add'}})
    }
  }
}
