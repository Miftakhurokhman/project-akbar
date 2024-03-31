import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGedungComponent } from './components/list-gedung/list-gedung.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGedungComponent } from './components/form-gedung/form-gedung.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-gedung",
    component : FormGedungComponent
  },
  {
    path: "list-gedung",
    component : ListGedungComponent
  },
];

@NgModule({
  declarations: [
    ListGedungComponent,
    FormGedungComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GedungModule { }
