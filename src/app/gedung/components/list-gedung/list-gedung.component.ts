import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-gedung',
  templateUrl: './list-gedung.component.html',
  styleUrls: ['./list-gedung.component.css']
})
export class ListGedungComponent {
  constructor(private router: Router){}

  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      id: 1,
      gedung: "Gedung A",
      deskripsiGedung: "Gedung utama lantai 1",
      status: "Yes"
    },
    {
      id: 2,
      gedung: "Gedung B",
      deskripsiGedung: "Gedung utama lantai 2",
      status: "No"
    },
    {
      id: 3,
      gedung: "Gedung C",
      deskripsiGedung: "Gedung parkir lantai 1",
      status: "Yes"
    },
    {
      id: 4,
      gedung: "Gedung D",
      deskripsiGedung: "Gedung parkir lantai 2",
      status: "Yes"
    },
    {
      id: 5,
      gedung: "Gedung E",
      deskripsiGedung: "Gedung kantor lantai 1",
      status: "No"
    },
    {
      id: 6,
      gedung: "Gedung F",
      deskripsiGedung: "Gedung kantor lantai 2",
      status: "Yes"
    },
    {
      id: 7,
      gedung: "Gedung G",
      deskripsiGedung: "Gedung kelas lantai 1",
      status: "Yes"
    },
    {
      id: 8,
      gedung: "Gedung H",
      deskripsiGedung: "Gedung kelas lantai 2",
      status: "No"
    },
    {
      id: 9,
      gedung: "Gedung I",
      deskripsiGedung: "Gedung olahraga lantai 1",
      status: "Yes"
    },
    {
      id: 10,
      gedung: "Gedung J",
      deskripsiGedung: "Gedung olahraga lantai 2",
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
      this.router.navigate(['/master-data', 'gedung', 'form-gedung'], {
        queryParams: { action: 'add' },
      });
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'gedung', 'form-gedung'], {
        queryParams: { action: 'edit', id: id },
      });
    }
  }
}