import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-kode-wip',
  templateUrl: './list-kode-wip.component.html',
  styleUrl: './list-kode-wip.component.css'
})
export class ListKodeWipComponent {

  constructor(private router: Router){}

  openPage(pageName: string) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'kode-wip', 'form-kode-wip'], {queryParams:{action:'add'}})
    }
  }
}
