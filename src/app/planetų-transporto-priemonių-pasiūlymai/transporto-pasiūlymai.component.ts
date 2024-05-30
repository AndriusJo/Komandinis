import { Component } from '@angular/core';

@Component({
  templateUrl: './transporto-pasiūlymai.component.html',
  styleUrl: './transporto-pasiūlymai.component.css'
})
export class TransportoPasiūlymaiComponent {
  naujaKelione = false;
  pasirinktasPradziosTaskas: string = '';
  pasirinktasPabaigosTaskas: string = '';
  pasirinktaData: Date;

  visible1:boolean=false

  onclick1(){
    this.visible1= !this.visible1
  }

  visible2:boolean=false

  onclick2(){
    this.visible2= !this.visible2
  }

  visible3:boolean=false

  onclick3(){
    this.visible3= !this.visible3
  }

  visible4:boolean=false

  onclick4(){
    this.visible4= !this.visible4
  }

  visible5:boolean=false

  onclick5(){
    this.visible5= !this.visible5
  }
  visible6:boolean=false

  onclick6(){
    this.visible6= !this.visible6
  }
  visible7:boolean=false

  onclick7(){
    this.visible7= !this.visible7
  }
  visible8:boolean=false

  onclick8(){
    this.visible8= !this.visible8
  }

  visible9:boolean=false

  onclick9(){
    this.visible9= !this.visible9
  }

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
