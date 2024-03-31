import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActivitasComponent } from './components/list-activitas/list-activitas.component';
import { FormActivitasComponent } from './components/form-activitas/form-activitas.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-activitas",
    component : FormActivitasComponent
  },
  {
    path: "list-activitas",
    component : ListActivitasComponent
  },
];

@NgModule({
  declarations: [
    ListActivitasComponent,
    FormActivitasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ActivitasModule { }
