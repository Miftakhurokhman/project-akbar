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
  {
    path: "master-data/grup-mesin",
    loadChildren: () => import("./grup-mesin/grup-mesin.module").then(m => m.GrupMesinModule)
  },
  {
    path: "master-data/proses",
    loadChildren: () => import("./proses/proses.module").then(m => m.ProsesModule)
  },
  {
    path: "master-data/activitas",
    loadChildren: () => import("./activitas/activitas.module").then(m => m.ActivitasModule)
  },
  {
    path: "master-data/spec-dimensi",
    loadChildren: () => import("./spec-dimensi/spec-dimensi.module").then(m => m.SpecDimensiModule)
  },
  {
    path: "master-data/spec-parameter",
    loadChildren: () => import("./spec-parameter/spec-parameter.module").then(m => m.SpecParameterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
