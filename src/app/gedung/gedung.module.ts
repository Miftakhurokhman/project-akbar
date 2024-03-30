import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGedungComponent } from './components/list-gedung/list-gedung.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGedungComponent } from './components/form-gedung/form-gedung.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  
  {
    path: "form-mesin",
    component : FormGedungComponent
  },
  {
    path: "list-gedung",
    component : ListGedungComponent
  },
];

@NgModule({
  declarations: [
    ListGedungComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatTableModule
  ]
})
export class GedungModule { }
