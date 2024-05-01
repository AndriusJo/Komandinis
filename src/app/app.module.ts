import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlanasComponent } from './Kelionės plano tvarkymas/planas.component';
import { HomeComponent } from './Pagrindinis langas/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BagazoDialogComponent } from './bagazo-dialog/bagazo-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MarsrutoZiurejimasComponent } from './marsruto-ziurejimas/marsruto-ziurejimas.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarsrutoGeneravimasComponent } from './marsruto-generavimas/marsruto-generavimas.component';
import { MarsGeneravimoDialogComponent } from './mars-generavimo-dialog/mars-generavimo-dialog.component';
import { PaslauguDialogComponent } from './paslaugu-dialog/paslaugu-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { KelioniuPerziuraComponent } from './Kelioniu-perziura/Kelioniu-perziura.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanasComponent,
    HomeComponent,
    BagazoDialogComponent,
    KelioniuPerziuraComponent,
    MarsrutoZiurejimasComponent,
    MarsrutoGeneravimasComponent,
    MarsGeneravimoDialogComponent,
    PaslauguDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    RouterModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
