import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiac-dialog',
  templateUrl: './zodiac-dialog.component.html',
  styleUrls: ['./zodiac-dialog.component.css']
})
export class ZodiacDialogComponent {
  selectedSign: string;
  outputText: string;

  generateRoute() {
    if (this.selectedSign) {
      this.outputText = `Generated route for ${this.getZodiacName(this.selectedSign)} (${this.selectedSign})`;
    } else {
      this.outputText = 'Please select a zodiac sign.';
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
