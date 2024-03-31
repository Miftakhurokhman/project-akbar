import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-activitas',
  templateUrl: './list-activitas.component.html',
  styleUrl: './list-activitas.component.css',
})
export class ListActivitasComponent {
  constructor(private router: Router) {}
  searchValue = '';
  dataIsNotEmpty = true;
  allData: any[] = [
    {
      idAktivitas: 'ACT001',
      aktivitas: 'Meeting Tim Proyek',
      idProgres: 'PROG001',
      status: 'Yes',
    },
    {
      idAktivitas: 'ACT002',
      aktivitas: 'Analisis Persyaratan',
      idProgres: 'PROG002',
      status: 'No',
    },
    {
      idAktivitas: 'ACT003',
      aktivitas: 'Desain UI',
      idProgres: 'PROG003',
      status: 'Yes',
    },
    {
      idAktivitas: 'ACT004',
      aktivitas: 'Pengembangan Frontend',
      idProgres: 'PROG002',
      status: 'No',
    },
    {
      idAktivitas: 'ACT005',
      aktivitas: 'Pengujian Sistem',
      idProgres: 'PROG003',
      status: 'Yes',
    },
    {
      idAktivitas: 'ACT006',
      aktivitas: 'Pengembangan Backend',
      idProgres: 'PROG002',
      status: 'Yes',
    },
    {
      idAktivitas: 'ACT007',
      aktivitas: 'Pelatihan Pengguna',
      idProgres: 'PROG003',
      status: 'No',
    },
    {
      idAktivitas: 'ACT008',
      aktivitas: 'Uji Coba Alpha',
      idProgres: 'PROG001',
      status: 'Yes',
    },
    {
      idAktivitas: 'ACT009',
      aktivitas: 'Uji Coba Beta',
      idProgres: 'PROG001',
      status: 'No',
    },
    {
      idAktivitas: 'ACT010',
      aktivitas: 'Implementasi',
      idProgres: 'PROG001',
      status: 'Yes',
    },
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
