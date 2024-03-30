import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "master-data/mesin",
    loadChildren: () => import("./mesin/mesin.module").then(m => m.MesinModule)
  },
  {
    path: "master-data/gedung",
    loadChildren: () => import("./gedung/gedung.module").then(m => m.GedungModule)
  },
  {
    path: "master-data/kode-wip",
    loadChildren: () => import("./kode-wip/kode-wip.module").then(m => m.KodeWipModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
