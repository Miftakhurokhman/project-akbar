import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'; // Import filter operator

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'industriesApp';

  openSideBar = false;
  masterDataIsOpened = false;
  masterDataOpened = [
    {
      opened : false,
      name : "kode-wip",
      displayedName : "Kode WIP"
    },
    {
      opened : false,
      name : "gedung",
      displayedName : "Gedung"
    },
    {
      opened : false,
      name : "grup-mesin",
      displayedName : "Grup Mesin"
    },
    {
      opened : false,
      name : "mesin",
      displayedName : "Mesin"
    },
    {
      opened : false,
      name : "proses",
      displayedName : "Proses"
    },
    {
      opened : false,
      name : "activitas",
      displayedName : "Activitas"
    },
    {
      opened : false,
      name : "spec-dimensi",
      displayedName : "Spec Dimensi"
    },
    {
      opened : false,
      name : "spec-parameter",
      displayedName : "Spec Parameter"
    }
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  @ViewChild('sidebar') sidebar!: ElementRef;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Get the current URL after redirects
        const currentUrl = event.urlAfterRedirects;
        console.log('Current URL:', currentUrl);
        this.checkPath(currentUrl);
      });
  }

  // Method to toggle the sidebar
  toggleSidebar() {
    this.openSideBar = !this.openSideBar;
  }

  openPage(pageName: string) {
    if (pageName === "mesin") {
      this.router.navigate(['/master-data', 'mesin', 'list-mesin'])
    } else if (pageName === 'dashboard') {
      this.router.navigate(['/dashboard'])
    } else if (pageName === 'gedung') {
      this.router.navigate(['/master-data', 'gedung', 'list-gedung'])
    }
  }

  checkPath(path: string) {
    let pathArray = path.split('/');
    pathArray = pathArray.filter(item => item !== '');
    if (pathArray[0] === 'master-data') {
      this.masterDataIsOpened = true;
      this.masterDataOpened.forEach((childMenu, index) => {
        if (childMenu.name === pathArray[1]) {
          this.masterDataOpened[index].opened = true;
        } else {
          this.masterDataOpened[index].opened = false;
        }
      });
    } else {
      this.masterDataIsOpened = false;
      this.masterDataOpened.forEach((_, index) => {
        this.masterDataOpened[index].opened = false;
      });
    }
  }
}
