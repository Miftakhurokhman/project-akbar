import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-spec-dimensi',
  templateUrl: './list-spec-dimensi.component.html',
  styleUrl: './list-spec-dimensi.component.css'
})
export class ListSpecDimensiComponent {
  constructor(private router: Router){}
  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      kodeWIP: "WIP001",
      idProses: 101,
      revisiDimensi: "Rev001",
      beginDate: "2024-03-01",
      endDate: "2024-03-15",
      status: "Yes",
      panjangTread: 10.5
    },
    {
      kodeWIP: "WIP002",
      idProses: 102,
      revisiDimensi: "Rev002",
      beginDate: "2024-02-15",
      endDate: "2024-03-01",
      status: "No",
      panjangTread: 8.2
    },
    {
      kodeWIP: "WIP003",
      idProses: 103,
      revisiDimensi: "Rev001",
      beginDate: "2024-03-10",
      endDate: "2024-03-25",
      status: "Yes",
      panjangTread: 12.7
    },
    {
      kodeWIP: "WIP004",
      idProses: 104,
      revisiDimensi: "Rev003",
      beginDate: "2024-02-28",
      endDate: "2024-03-15",
      status: "Yes",
      panjangTread: 15.3
    },
    {
      kodeWIP: "WIP005",
      idProses: 105,
      revisiDimensi: "Rev002",
      beginDate: "2024-03-05",
      endDate: "2024-03-20",
      status: "No",
      panjangTread: 11.8
    },
    {
      kodeWIP: "WIP006",
      idProses: 106,
      revisiDimensi: "Rev001",
      beginDate: "2024-03-20",
      endDate: "2024-04-05",
      status: "Yes",
      panjangTread: 9.6
    },
    {
      kodeWIP: "WIP007",
      idProses: 107,
      revisiDimensi: "Rev004",
      beginDate: "2024-03-15",
      endDate: "2024-03-30",
      status: "Yes",
      panjangTread: 13.2
    },
    {
      kodeWIP: "WIP008",
      idProses: 108,
      revisiDimensi: "Rev002",
      beginDate: "2024-03-25",
      endDate: "2024-04-10",
      status: "No",
      panjangTread: 10.1
    },
    {
      kodeWIP: "WIP009",
      idProses: 109,
      revisiDimensi: "Rev001",
      beginDate: "2024-03-01",
      endDate: "2024-03-16",
      status: "Yes",
      panjangTread: 14.5
    },
    {
      kodeWIP: "WIP010",
      idProses: 110,
      revisiDimensi: "Rev003",
      beginDate: "2024-03-10",
      endDate: "2024-03-25",
      status: "Yes",
      panjangTread: 12.0
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
      this.router.navigate(['/master-data', 'spec-dimensi', 'form-spec-dimensi'], {
        queryParams: { action: 'add' },
      });
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'spec-dimensi', 'form-spec-dimensi'], {
        queryParams: { action: 'edit', id: id },
      });
    }
  }
}
