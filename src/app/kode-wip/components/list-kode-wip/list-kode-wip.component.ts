import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-kode-wip',
  templateUrl: './list-kode-wip.component.html',
  styleUrl: './list-kode-wip.component.css'
})
export class ListKodeWipComponent {

  constructor(private router: Router){}

  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      id: 1,
      kodeWIP: "WIP001",
      deskripsi: "Deskripsi WIP 001",
      uomWIP: "PCS",
      idProses: 101,
      status: "Yes"
    },
    {
      id: 2,
      kodeWIP: "WIP002",
      deskripsi: "Deskripsi WIP 002",
      uomWIP: "KG",
      idProses: 102,
      status: "No"
    },
    {
      id: 3,
      kodeWIP: "WIP003",
      deskripsi: "Deskripsi WIP 003",
      uomWIP: "M",
      idProses: 103,
      status: "Yes"
    },
    {
      id: 4,
      kodeWIP: "WIP004",
      deskripsi: "Deskripsi WIP 004",
      uomWIP: "PCS",
      idProses: 104,
      status: "Yes"
    },
    {
      id: 5,
      kodeWIP: "WIP005",
      deskripsi: "Deskripsi WIP 005",
      uomWIP: "M",
      idProses: 105,
      status: "No"
    },
    {
      id: 6,
      kodeWIP: "WIP006",
      deskripsi: "Deskripsi WIP 006",
      uomWIP: "KG",
      idProses: 106,
      status: "Yes"
    },
    {
      id: 7,
      kodeWIP: "WIP007",
      deskripsi: "Deskripsi WIP 007",
      uomWIP: "PCS",
      idProses: 107,
      status: "Yes"
    },
    {
      id: 8,
      kodeWIP: "WIP008",
      deskripsi: "Deskripsi WIP 008",
      uomWIP: "M",
      idProses: 108,
      status: "No"
    },
    {
      id: 9,
      kodeWIP: "WIP009",
      deskripsi: "Deskripsi WIP 009",
      uomWIP: "KG",
      idProses: 109,
      status: "Yes"
    },
    {
      id: 10,
      kodeWIP: "WIP010",
      deskripsi: "Deskripsi WIP 010",
      uomWIP: "PCS",
      idProses: 110,
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
      this.router.navigate(['/master-data', 'kode-wip', 'form-kode-wip'], {
        queryParams: { action: 'add' },
      });
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'kode-wip', 'form-kode-wip'], {
        queryParams: { action: 'edit', id: id },
      });
    }
  }
}
