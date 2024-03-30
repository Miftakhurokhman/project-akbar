import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-gedung',
  templateUrl: './list-gedung.component.html',
  styleUrls: ['./list-gedung.component.css']
})
export class ListGedungComponent implements OnInit {
  allData = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    // { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    // { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    // { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    // { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    // { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    // { position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // { position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    // { position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 25, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    // { position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    // { position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    // { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  displayedData = this.allData;
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  displayPages: number[] = []

  constructor() { }

  ngOnInit(): void {
    this.updateDisplayedData();
  }

  updateDisplayedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.allData.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.allData.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.setDisplayPage();
    console.log(this.pages)
  }

  setDisplayPage() {
    this.displayPages = []
    if (this.pages.length > 3) {
      let indexDisplayedPages = 0; 
      if (this.currentPage === this.pages[this.pages.length-1]) { // 8 kurang 1= 7
        indexDisplayedPages = this.currentPage-3 // 5
        for (let index = 0; index < 3; index++) {
          this.displayPages.push(this.pages[indexDisplayedPages+index])
        }
      }
      else if (this.currentPage === 1) {
        for (let index = 0; index < 3; index++) {
          this.displayPages.push(this.pages[index])
        }
      } else {
        indexDisplayedPages = this.currentPage-2
        for (let index = 0; index < 3; index++) {
          this.displayPages.push(this.pages[indexDisplayedPages+index])
        }
      }
    } else {
      this.displayPages = this.pages
    }
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.updateDisplayedData();
  }
}

// export interface Element {
//   position: number;
//   name: string;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: Element[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
