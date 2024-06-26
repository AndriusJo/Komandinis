import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-Marsruto-generavimas-dialog',
  templateUrl: './mgd.component.html'
})
export class MGComponent {
  bagazoWeight: number;

  constructor(public dialogRef: MatDialogRef<MGComponent>) { }

  onSubmit(): void {
    // You can handle the submission logic here
    this.dialogRef.close(this.bagazoWeight);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  selectedSign: string;
  outputText: string;

  generateRoute() {
    if (this.selectedSign) {
      this.outputText = `Žvaigždės sako, kad jūs turėtumėte keliauti į Venerą`;
    } else {
      this.outputText = 'Prašome pasirinkti horoskopo ženklą.';
    }
  }

  getZodiacName(sign: string): string {
    const zodiacNames = {
      aries: 'Avinas',
      taurus: 'Jautis',
      gemini: 'Dvyniai',
      cancer: 'Vėžys',
      leo: 'Liūtas',
      virgo: 'Mergelė',
      libra: 'Svarstyklės',
      scorpio: 'Skorpionas',
      sagittarius: 'Šaulys',
      capricorn: 'Ožiaragis',
      aquarius: 'Vandenis',
      pisces: 'Žuvys'
    };
    return zodiacNames[sign];
  }
}
