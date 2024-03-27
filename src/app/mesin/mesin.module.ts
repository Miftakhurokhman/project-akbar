import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformasiMesinComponent } from './informasi-mesin/informasi-mesin.component';
import { ListMesinComponent } from './components/list-mesin/list-mesin.component';
import { FormMesinComponent } from './components/form-mesin/form-mesin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "add-mesin",
    component : FormMesinComponent
  },
  {
    path: "list-mesin",
    component : ListMesinComponent
  },
];

@NgModule({
  declarations: [
    InformasiMesinComponent,
    ListMesinComponent,
    FormMesinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MesinModule { }
