import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormSpecParameterComponent } from './components/form-spec-parameter/form-spec-parameter.component';
import { ListSpecParameterComponent } from './components/list-spec-parameter/list-spec-parameter.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-spec-parameter",
    component : FormSpecParameterComponent
  },
  {
    path: "list-spec-parameter",
    component : ListSpecParameterComponent
  },
];

@NgModule({
  declarations: [
    FormSpecParameterComponent,
    ListSpecParameterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SpecParameterModule { }
