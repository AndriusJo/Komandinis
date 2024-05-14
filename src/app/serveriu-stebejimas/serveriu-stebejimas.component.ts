import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-serveriu-stebejimas',
  templateUrl: './serveriu-stebejimas.component.html',
  styleUrl: './serveriu-stebejimas.component.css'
})
export class ServeriuStebejimasComponent {
  planets = [
    { name: 'Merkurijus', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Venus', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Žemė', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Marsas', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Jupiteris', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Saturnas', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Uransas', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Neptūnas', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Plutonas', gif: 'e82d2619658459562de1c02af68.gif' }
  ];

}
