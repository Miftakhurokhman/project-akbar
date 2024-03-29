import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'industriesApp';

  constructor(private router: Router) {}

  @ViewChild('sidebar') sidebar!: ElementRef;

  // Metode untuk membuka dan menutup sidebar
  toggleSidebar() {
    this.sidebar.nativeElement.classList.toggle('open');
  }

  openPage(pageName: string) {
    if(pageName==="mesin") {
      this.router.navigate(['/mesin', 'list-mesin'])
    }
  }
}
