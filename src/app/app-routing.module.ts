import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanasComponent } from "./Kelionės plano tvarkymas/planas.component"
import { HomeComponent } from "./Pagrindinis langas/home.component"
import { BagazoDialogComponent } from "./bagazo-dialog/bagazo-dialog.component"
import { MarsrutoZiurejimasComponent } from './marsruto-ziurejimas/marsruto-ziurejimas.component';
import { MarsrutoGeneravimasComponent } from './marsruto-generavimas/marsruto-generavimas.component';
import { ManoKelionesComponent } from "./Mano_keliones/manokeliones.component";
import { KelioniuPerziuraComponent } from './Kelioniu-perziura/Kelioniu-perziura.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planas', component: PlanasComponent },
  { path: 'kel-perziura', component: KelioniuPerziuraComponent },
  { path: 'mars-perziura', component: MarsrutoZiurejimasComponent },
  { path: 'mars-generavimas', component: MarsrutoGeneravimasComponent },
  { path: 'manokeliones', component: ManoKelionesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
