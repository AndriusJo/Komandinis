import { Component } from '@angular/core';

@Component({
  selector: 'app-mars-generavimo-dialog',
  templateUrl: './mars-generavimo-dialog.component.html',
  styleUrl: './mars-generavimo-dialog.component.css'
})
export class MarsGeneravimoDialogComponent {
  selectedPlanet: string;
  leaveDate: string;
  arrivalDate: string;
  planetFacts: string;

  createRoute() {
    // Handle route creation logic here
    console.log('Selected Planet:', this.selectedPlanet);
    console.log('Leave Date:', this.leaveDate);
    console.log('Arrival Date:', this.arrivalDate);
    console.log('Planet Facts:', this.planetFacts);
    // You can implement further logic to send data to a backend server or perform any other actions
  }
}
