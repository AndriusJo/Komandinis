import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  templateUrl: './manokeliones.component.html'
})

export class ManoKelionesComponent {
  naujaKelione = false;
  pasirinktasPradziosTaskas: string = '';
  pasirinktasPabaigosTaskas: string = '';
  pasirinktaData: Date;

  constructor(public dialog: MatDialog) { }

  atidarytiKelionesPlanavimoLangas() {
    this.naujaKelione = true;
  }

  pasirinktiNuomotiAutomobili() {
    // Čia galite įgyvendinti automobilių nuomos pasiūlymų langą
    console.log('Pasirinkti nuomoti automobilį');
  }

  pasirinktiNuomuotiViesbuti() {
    // Čia galite įgyvendinti viešbučių peržiūros langą
    console.log('Pasirinkti nuomuoti viešbutį');
  }


  issaugotiKelionesPlana() {
    // Čia galite įgyvendinti kelionės plano išsaugojimą
    console.log('Išsaugoti kelionės planą');
  }
}
