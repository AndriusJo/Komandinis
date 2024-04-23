import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanasComponent } from "./Kelionės plano tvarkymas/planas.component"
import { HomeComponent } from "./Pagrindinis langas/home.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planas', component: PlanasComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
