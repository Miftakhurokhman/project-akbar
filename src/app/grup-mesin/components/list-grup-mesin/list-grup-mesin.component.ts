import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-grup-mesin',
  templateUrl: './list-grup-mesin.component.html',
  styleUrl: './list-grup-mesin.component.css'
})
export class ListGrupMesinComponent {

  constructor(private router: Router) {}

  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      id: 1,
      kodeGrupMesin: "KM001",
      grupMesin: "Grup Mesin A",
      idProses: 101,
      proses: "Proses A",
      status: "Yes"
    },
    {
      id: 2,
      kodeGrupMesin: "KM002",
      grupMesin: "Grup Mesin B",
      idProses: 102,
      proses: "Proses B",
      status: "No"
    },
    {
      id: 3,
      kodeGrupMesin: "KM003",
      grupMesin: "Grup Mesin C",
      idProses: 103,
      proses: "Proses C",
      status: "Yes"
    },
    {
      id: 4,
      kodeGrupMesin: "KM004",
      grupMesin: "Grup Mesin D",
      idProses: 104,
      proses: "Proses D",
      status: "Yes"
    },
    {
      id: 5,
      kodeGrupMesin: "KM005",
      grupMesin: "Grup Mesin E",
      idProses: 105,
      proses: "Proses E",
      status: "No"
    },
    {
      id: 6,
      kodeGrupMesin: "KM006",
      grupMesin: "Grup Mesin F",
      idProses: 106,
      proses: "Proses F",
      status: "Yes"
    },
    {
      id: 7,
      kodeGrupMesin: "KM007",
      grupMesin: "Grup Mesin G",
      idProses: 107,
      proses: "Proses G",
      status: "Yes"
    },
    {
      id: 8,
      kodeGrupMesin: "KM008",
      grupMesin: "Grup Mesin H",
      idProses: 108,
      proses: "Proses H",
      status: "No"
    },
    {
      id: 9,
      kodeGrupMesin: "KM009",
      grupMesin: "Grup Mesin I",
      idProses: 109,
      proses: "Proses I",
      status: "Yes"
    },
    {
      id: 10,
      kodeGrupMesin: "KM010",
      grupMesin: "Grup Mesin J",
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
      this.router.navigate(['/master-data', 'grup-mesin', 'form-grup-mesin'], {
        queryParams: { action: 'add' },
      });
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'grup-mesin', 'form-grup-mesin'], {
        queryParams: { action: 'edit', id: id },
      });
    }
  }
}
