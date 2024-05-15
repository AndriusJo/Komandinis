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
}
