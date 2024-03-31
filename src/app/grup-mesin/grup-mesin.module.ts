import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGrupMesinComponent } from './components/list-grup-mesin/list-grup-mesin.component';
import { FormGrupMesinComponent } from './components/form-grup-mesin/form-grup-mesin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-grup-mesin",
    component : FormGrupMesinComponent
  },
  {
    path: "list-grup-mesin",
    component : ListGrupMesinComponent
  },
];

@NgModule({
  declarations: [
    ListGrupMesinComponent,
    FormGrupMesinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GrupMesinModule { }
