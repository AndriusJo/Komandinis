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


}
