import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-mesin',
  templateUrl: './list-mesin.component.html',
  styleUrl: './list-mesin.component.css'
})
export class ListMesinComponent implements OnInit {

  constructor(private router:Router) {}

  searchValue = "";
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      id: 1,
      noMesin: "MESIN1",
      lokasiMesin: "LOKASI A",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung A",
      status: "Yes"
    },
    {
      id: 2,
      noMesin: "MESIN2",
      lokasiMesin: "LOKASI B",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES2",
      proses: "Proses Penyimpanan",
      gedung: "Gedung B",
      status: "No"
    },
    {
      id: 3,
      noMesin: "MESIN3",
      lokasiMesin: "LOKASI C",
      kodeGrupMesin: "GRP3",
      grupMesin: "Group C",
      idProses: "PROSES3",
      proses: "Proses Pengemasan",
      gedung: "Gedung C",
      status: "Yes"
    },
    {
      id: 4,
      noMesin: "MESIN4",
      lokasiMesin: "LOKASI D",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES2",
      proses: "Proses Produksi",
      gedung: "Gedung D",
      status: "No"
    },
    {
      id: 5,
      noMesin: "MESIN5",
      lokasiMesin: "LOKASI E",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES3",
      proses: "Proses Pengemasan",
      gedung: "Gedung E",
      status: "Yes"
    },
    {
      id: 6,
      noMesin: "MESIN6",
      lokasiMesin: "LOKASI F",
      kodeGrupMesin: "GRP3",
      grupMesin: "Group C",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung F",
      status: "No"
    },
    {
      id: 7,
      noMesin: "MESIN7",
      lokasiMesin: "LOKASI G",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES2",
      proses: "Proses Penyimpanan",
      gedung: "Gedung G",
      status: "Yes"
    },
    {
      id: 8,
      noMesin: "MESIN8",
      lokasiMesin: "LOKASI H",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES3",
      proses: "Proses Pengemasan",
      gedung: "Gedung H",
      status: "No"
    },
    {
      id: 9,
      noMesin: "MESIN9",
      lokasiMesin: "LOKASI I",
      kodeGrupMesin: "GRP3",
      grupMesin: "Group C",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung I",
      status: "Yes"
    },
    {
      id: 10,
      noMesin: "MESIN10",
      lokasiMesin: "LOKASI J",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES2",
      proses: "Proses Penyimpanan",
      gedung: "Gedung J",
      status: "No"
    },
    {
      id: 11,
      noMesin: "MESIN11",
      lokasiMesin: "LOKASI K",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung K",
      status: "Yes"
    },
    {
      id: 12,
      noMesin: "MESIN12",
      lokasiMesin: "LOKASI L",
      kodeGrupMesin: "GRP3",
      grupMesin: "Group C",
      idProses: "PROSES2",
      proses: "Proses Penyimpanan",
      gedung: "Gedung L",
      status: "No"
    },
    {
      id: 13,
      noMesin: "MESIN13",
      lokasiMesin: "LOKASI M",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES3",
      proses: "Proses Pengemasan",
      gedung: "Gedung M",
      status: "Yes"
    },
    {
      id: 14,
      noMesin: "MESIN14",
      lokasiMesin: "LOKASI N",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung N",
      status: "No"
    },
    {
      id: 15,
      noMesin: "MESIN15",
      lokasiMesin: "LOKASI O",
      kodeGrupMesin: "GRP3",
      grupMesin: "Group C",
      idProses: "PROSES2",
      proses: "Proses Penyimpanan",
      gedung: "Gedung O",
      status: "Yes"
    },
    {
      id: 16,
      noMesin: "MESIN16",
      lokasiMesin: "LOKASI P",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES3",
      proses: "Proses Pengemasan",
      gedung: "Gedung P",
      status: "No"
    },
    {
      id: 17,
      noMesin: "MESIN17",
      lokasiMesin: "LOKASI Q",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung Q",
      status: "Yes"
    },
    {
      id: 18,
      noMesin: "MESIN18",
      lokasiMesin: "LOKASI R",
      kodeGrupMesin: "GRP3",
      grupMesin: "Group C",
      idProses: "PROSES2",
      proses: "Proses Penyimpanan",
      gedung: "Gedung R",
      status: "No"
    },
    {
      id: 19,
      noMesin: "MESIN19",
      lokasiMesin: "LOKASI S",
      kodeGrupMesin: "GRP1",
      grupMesin: "Group A",
      idProses: "PROSES3",
      proses: "Proses Pengemasan",
      gedung: "Gedung S",
      status: "Yes"
    },
    {
      id: 20,
      noMesin: "MESIN20",
      lokasiMesin: "LOKASI T",
      kodeGrupMesin: "GRP2",
      grupMesin: "Group B",
      idProses: "PROSES1",
      proses: "Proses Produksi",
      gedung: "Gedung T",
      status: "No"
    }
    
  ];
  displayedData = this.allData;
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  displayPages: number[] = []

  ngOnInit(): void {
    // panggil api untuk mendapatkan semua data disini, kemudian simpan ke var allData. Dalam kasus ini, data sudah saya isi dengan data dummy. Jadi untuk real case, saat deklarasi variable allData, isinya masih kosong
    this.dataIsNotEmpty = this.allData.length >= 1;
    this.updateDisplayedData();
  }

  filteringData () {
    // fetch data dari api untuk filtering disini dan simpan di all data, untuk mendapatkan data yang sesuai dengan apa yang difilter disini, sebagai contoh, misal filtering mendapatkan data seperti dibawah ini, dan disimpan di dalam allData
    this.allData = [
      {
        noMesin: "MESIN1",
        lokasiMesin: "LOKASI A",
        kodeGrupMesin: "GRP1",
        grupMesin: "Group A",
        idProses: "PROSES1",
        proses: "Proses Produksi",
        gedung: "Gedung A",
        status: "Yes"
      },
      {
        noMesin: "MESIN2",
        lokasiMesin: "LOKASI B",
        kodeGrupMesin: "GRP2",
        grupMesin: "Group B",
        idProses: "PROSES2",
        proses: "Proses Penyimpanan",
        gedung: "Gedung B",
        status: "No"
      },
      {
        noMesin: "MESIN3",
        lokasiMesin: "LOKASI C",
        kodeGrupMesin: "GRP3",
        grupMesin: "Group C",
        idProses: "PROSES3",
        proses: "Proses Pengemasan",
        gedung: "Gedung C",
        status: "Yes"
      },
    ]
    this.changePage(1);
  }

  clearSearching() {
    this.searchValue = ""
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
    this.displayPages = []
    if (this.pages.length > 3) {
      let indexDisplayedPages = 0; 
      if (this.currentPage === this.pages[this.pages.length-1]) {
        indexDisplayedPages = this.currentPage-3
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

  openPage(pageName: string, id: any) {
    if (pageName==="add") {
      this.router.navigate(['/master-data', 'mesin', 'form-mesin'], {queryParams:{action:'add'}})
    } else if (pageName === 'edit') {
      this.router.navigate(['/master-data', 'mesin', 'form-mesin'], {queryParams:{action:'edit', id: id}})
    }
  }
} 
