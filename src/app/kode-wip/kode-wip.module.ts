import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListKodeWipComponent } from './components/list-kode-wip/list-kode-wip.component';
import { FormKodeWipComponent } from './components/form-kode-wip/form-kode-wip.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: "form-kode-wip",
    component : FormKodeWipComponent
  },
  {
    path: "list-kode-wip",
    component : ListKodeWipComponent
  },
];

@NgModule({
  declarations: [
    ListKodeWipComponent,
    FormKodeWipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class KodeWipModule { }
