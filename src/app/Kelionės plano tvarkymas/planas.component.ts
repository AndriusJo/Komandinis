import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Step 1: Import Router
import { BagazoDialogComponent } from '../bagazo-dialog/bagazo-dialog.component';
import { PaslauguDialogComponent } from '../paslaugu-dialog/paslaugu-dialog.component';

@Component({
  templateUrl: './planas.component.html',
  styleUrl: './planas.component.css'
})

export class PlanasComponent {
  naujaKelione = false;
  pasirinktasPradziosTaskas: string = '';
  pasirinktasPabaigosTaskas: string = '';
  pasirinktaData: Date;

  constructor(public dialog: MatDialog, private router: Router) { } // Step 2: Inject Router

  atidarytiKelionesPlanavimoLangas() {
    this.naujaKelione = true;
  }

  pasirinktiNuomotiAutomobili() {
    // Čia galite įgyvendinti automobilių nuomos pasiūlymų langą
    console.log('Pasirinkti nuomoti automobilį');
  }

  pasirinktiRegistruotiBagaza() {
    // Čia galite įgyvendinti bagažo registravimo langą
    const dialogRef = this.dialog.open(BagazoDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result here
    });
    console.log('Pasirinkti registruoti bagažą');
  }

  pasirinktiNuomuotiViesbuti() {
    // Čia galite įgyvendinti viešbučių peržiūros langą
    console.log('Pasirinkti nuomuoti viešbutį');
  }

  pasirinktiPridetiPapildomasPaslaugas() {
    // Čia galite įgyvendinti papildomų paslaugų peržiūros langą
    const dialogRef = this.dialog.open(PaslauguDialogComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    console.log('Pasirinkti pridėti papildomas paslaugas');
  }

  issaugotiKelionesPlana() {
    // Čia galite įgyvendinti kelionės plano išsaugojimą
    console.log('Išsaugoti kelionės planą');
    this.router.navigate(['/home']); // Step 3: Navigate to the home page
  }

  submitForm() {
    // Process form data here if needed
    // Redirect to home page
    this.router.navigate(['/home']); // Replace '/home' with the route of your home page
  }
}
