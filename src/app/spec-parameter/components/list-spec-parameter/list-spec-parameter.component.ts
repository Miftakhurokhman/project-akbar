import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-spec-parameter',
  templateUrl: './list-spec-parameter.component.html',
  styleUrl: './list-spec-parameter.component.css'
})
export class ListSpecParameterComponent {
  constructor(private router: Router){}

  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      id: 1,
      kodeWIP: "WIP001",
      kodeGrupMesin: "GRP001",
      grupMesin: "Grup Mesin 1",
      idProses: 101,
      revisi: "Rev001",
      beginDate: "2024-03-01",
      endDate: "2024-03-15",
      status: "Yes"
    },
    {
      id: 2,
      kodeWIP: "WIP002",
      kodeGrupMesin: "GRP002",
      grupMesin: "Grup Mesin 2",
      idProses: 102,
      revisi: "Rev002",
      beginDate: "2024-02-15",
      endDate: "2024-03-01",
      status: "No"
    },
    {
      id: 3,
      kodeWIP: "WIP003",
      kodeGrupMesin: "GRP003",
      grupMesin: "Grup Mesin 3",
      idProses: 103,
      revisi: "Rev001",
      beginDate: "2024-03-10",
      endDate: "2024-03-25",
      status: "Yes"
    },
    {
      id: 4,
      kodeWIP: "WIP004",
      kodeGrupMesin: "GRP004",
      grupMesin: "Grup Mesin 4",
      idProses: 104,
      revisi: "Rev003",
      beginDate: "2024-02-28",
      endDate: "2024-03-15",
      status: "Yes"
    },
    {
      id: 5,
      kodeWIP: "WIP005",
      kodeGrupMesin: "GRP005",
      grupMesin: "Grup Mesin 5",
      idProses: 105,
      revisi: "Rev002",
      beginDate: "2024-03-05",
      endDate: "2024-03-20",
      status: "No"
    },
    {
      id: 6,
      kodeWIP: "WIP006",
      kodeGrupMesin: "GRP006",
      grupMesin: "Grup Mesin 6",
      idProses: 106,
      revisi: "Rev001",
      beginDate: "2024-03-20",
      endDate: "2024-04-05",
      status: "Yes"
    },
    {
      id: 7,
      kodeWIP: "WIP007",
      kodeGrupMesin: "GRP007",
      grupMesin: "Grup Mesin 7",
      idProses: 107,
      revisi: "Rev004",
      beginDate: "2024-03-15",
      endDate: "2024-03-30",
      status: "Yes"
    },
    {
      id: 8,
      kodeWIP: "WIP008",
      kodeGrupMesin: "GRP008",
      grupMesin: "Grup Mesin 8",
      idProses: 108,
      revisi: "Rev002",
      beginDate: "2024-03-25",
      endDate: "2024-04-10",
      status: "No"
    },
    {
      id: 9,
      kodeWIP: "WIP009",
      kodeGrupMesin: "GRP009",
      grupMesin: "Grup Mesin 9",
      idProses: 109,
      revisi: "Rev001",
      beginDate: "2024-03-01",
      endDate: "2024-03-16",
      status: "Yes"
    },
    {
      id: 10,
      kodeWIP: "WIP010",
      kodeGrupMesin: "GRP010",
      grupMesin: "Grup Mesin 10",
      idProses: 110,
      revisi: "Rev003",
      beginDate: "2024-03-10",
      endDate: "2024-03-25",
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
      this.router.navigate(['/master-data', 'activitas', 'form-activitas'], {
        queryParams: { action: 'add' },
      });
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'activitas', 'form-activitas'], {
        queryParams: { action: 'edit', id: id },
      });
    }
  }
}
