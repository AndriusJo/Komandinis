import { Component } from '@angular/core';

@Component({
  templateUrl: './planas.component.html',
  styleUrl: './planas.component.css'
})
export class PlanasComponent {
  naujaKelione = false;
  pasirinktasPradziosTaskas: string = '';
  pasirinktasPabaigosTaskas: string = '';
  pasirinktaData: Date;

  atidarytiKelionesPlanavimoLangas() {
    this.naujaKelione = true;
  }

  pasirinktiNuomotiAutomobili() {
    // Čia galite įgyvendinti automobilių nuomos pasiūlymų langą
    console.log('Pasirinkti nuomoti automobilį');
  }

  pasirinktiRegistruotiBagaza() {
    // Čia galite įgyvendinti bagažo registravimo langą
    console.log('Pasirinkti registruoti bagažą');
  }

  pasirinktiNuomuotiViesbuti() {
    // Čia galite įgyvendinti viešbučių peržiūros langą
    console.log('Pasirinkti nuomuoti viešbutį');
  }

  pasirinktiPridetiPapildomasPaslaugas() {
    // Čia galite įgyvendinti papildomų paslaugų peržiūros langą
    console.log('Pasirinkti pridėti papildomas paslaugas');
  }

  issaugotiKelionesPlana() {
    // Čia galite įgyvendinti kelionės plano išsaugojimą
    console.log('Išsaugoti kelionės planą');
  }
}
