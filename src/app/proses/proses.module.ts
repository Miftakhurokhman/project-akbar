import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProsesComponent } from './components/list-proses/list-proses.component';
import { FormProsesComponent } from './components/form-proses/form-proses.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-proses",
    component : FormProsesComponent
  },
  {
    path: "list-proses",
    component : ListProsesComponent
  },
];

@NgModule({
  declarations: [
    ListProsesComponent,
    FormProsesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProsesModule { }
