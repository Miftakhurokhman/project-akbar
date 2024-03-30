import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMesinComponent } from './components/list-mesin/list-mesin.component';
import { FormMesinComponent } from './components/form-mesin/form-mesin.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-mesin",
    component : FormMesinComponent
  },
  {
    path: "list-mesin",
    component : ListMesinComponent
  },
];

@NgModule({
  declarations: [
    ListMesinComponent,
    FormMesinComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class MesinModule { }
