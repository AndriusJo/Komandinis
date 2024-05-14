import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-serveriu-stebejimas',
  templateUrl: './serveriu-stebejimas.component.html',
  styleUrl: './serveriu-stebejimas.component.css'
})
export class ServeriuStebejimasComponent {
  planets = [
    { name: 'Mercury', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Venus', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Earth', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Mars', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Jupiter', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Saturn', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Uranus', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Neptune', gif: 'e82d2619658459562de1c02af68.gif' },
    { name: 'Pluto', gif: 'e82d2619658459562de1c02af68.gif' }
  ];
}
