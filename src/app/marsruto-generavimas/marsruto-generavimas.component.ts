import { Component } from '@angular/core';
import { MarsGeneravimoDialogComponent } from '../mars-generavimo-dialog/mars-generavimo-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-marsruto-generavimas',
  templateUrl: './marsruto-generavimas.component.html',
  styleUrl: './marsruto-generavimas.component.css'
})
export class MarsrutoGeneravimasComponent {
  constructor(private dialog: MatDialog) { }

  openRouteDialog(): void {
    const dialogRef = this.dialog.open(MarsGeneravimoDialogComponent, {
      width: '400px', // Adjust the width as needed
    });

    // Subscribe to dialog close event (optional)
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      // You can handle the result returned by the dialog box here
    });
  }
}
