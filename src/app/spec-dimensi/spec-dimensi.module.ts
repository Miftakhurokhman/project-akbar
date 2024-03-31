import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpecDimensiComponent } from './components/list-spec-dimensi/list-spec-dimensi.component';
import { FormSpecDimensiComponent } from './components/form-spec-dimensi/form-spec-dimensi.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-spec-dimensi",
    component : FormSpecDimensiComponent
  },
  {
    path: "list-spec-dimensi",
    component : ListSpecDimensiComponent
  },
];

@NgModule({
  declarations: [
    ListSpecDimensiComponent,
    FormSpecDimensiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SpecDimensiModule { }
