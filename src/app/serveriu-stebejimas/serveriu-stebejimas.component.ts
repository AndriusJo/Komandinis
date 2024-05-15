import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ServerGifDialogComponent } from '../server-gif-dialog/server-gif-dialog.component';

@Component({
  selector: 'app-serveriu-stebejimas',
  templateUrl: './serveriu-stebejimas.component.html',
  styleUrl: './serveriu-stebejimas.component.css'
})
export class ServeriuStebejimasComponent {
  planets = [
    { name: 'Merkurijus', image: 'mercury.png' },
    { name: 'Venera', image: 'venus.png' },
    { name: 'Žemė', image: 'earth.png' },
    { name: 'Marsas', image: 'mars.png' },
    { name: 'Jupiteris', image: 'jupiter.png' },
    { name: 'Saturnas', image: 'saturn.png' },
    { name: 'Uranas', image: 'uranus.png' },
    { name: 'Neptūnas', image: 'neptune.png' },
    { name: 'Plutonas', image: 'pluto.png' },
    { name: 'server', gif: 'server.gif'}
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ServerGifDialogComponent, {
      width: '600px',
      data: { gif: 'server.gif' }
    });
  }
}