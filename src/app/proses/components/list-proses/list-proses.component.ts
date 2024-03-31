import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-proses',
  templateUrl: './list-proses.component.html',
  styleUrl: './list-proses.component.css'
})
export class ListProsesComponent {
  constructor(private router: Router){}

  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      idProses: 101,
      proses: "Proses A",
      status: "Yes"
    },
    {
      idProses: 102,
      proses: "Proses B",
      status: "No"
    },
    {
      idProses: 103,
      proses: "Proses C",
      status: "Yes"
    },
    {
      idProses: 104,
      proses: "Proses D",
      status: "Yes"
    },
    {
      idProses: 105,
      proses: "Proses E",
      status: "No"
    },
    {
      idProses: 106,
      proses: "Proses F",
      status: "Yes"
    },
    {
      idProses: 107,
      proses: "Proses G",
      status: "Yes"
    },
    {
      idProses: 108,
      proses: "Proses H",
      status: "No"
    },
    {
      idProses: 109,
      proses: "Proses I",
      status: "Yes"
    },
    {
      idProses: 110,
      proses: "Proses J",
      status: "Yes"
    }
  ];
  displayedData = this.allData;
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  displayPages: number[] = [];

  ngOnInit(): void {
    this.dataIsNotEmpty = this.allData.length >= 1;
    this.updateDisplayedData();
  }

  filteringData() {
    this.changePage(1);
  }

  clearSearching() {
    this.searchValue = '';
  }

  updateDisplayedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.allData.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.allData.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.setDisplayPage();
  }

  setDisplayPage() {
    this.displayPages = [];
    if (this.pages.length > 3) {
      let indexDisplayedPages = 0;
      if (this.currentPage === this.pages[this.pages.length - 1]) {
        indexDisplayedPages = this.currentPage - 3; 
        for (let index = 0; index < 3; index++) {
          this.displayPages.push(this.pages[indexDisplayedPages + index]);
        }
      } else if (this.currentPage === 1) {
        for (let index = 0; index < 3; index++) {
          this.displayPages.push(this.pages[index]);
        }
      } else {
        indexDisplayedPages = this.currentPage - 2;
        for (let index = 0; index < 3; index++) {
          this.displayPages.push(this.pages[indexDisplayedPages + index]);
        }
      }
    } else {
      this.displayPages = this.pages;
    }
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.updateDisplayedData();
  }
  openPage(pageName: string, id: any) {
    if (pageName === 'add') {
      this.router.navigate(['/master-data', 'proses', 'form-proses'], {
        queryParams: { action: 'add' },
      });
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'proses', 'form-proses'], {
        queryParams: { action: 'edit', id: id },
      });
    }
  }
}
