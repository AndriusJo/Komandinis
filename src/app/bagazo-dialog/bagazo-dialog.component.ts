import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bagazo-dialog',
  templateUrl: './bagazo-dialog.component.html',
  styleUrl: './bagazo-dialog.component.css'
})
export class BagazoDialogComponent {
  bagazoWeight: number;

  constructor(public dialogRef: MatDialogRef<BagazoDialogComponent>) { }

  onSubmit(): void {
    // You can handle the submission logic here
    this.dialogRef.close(this.bagazoWeight);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
