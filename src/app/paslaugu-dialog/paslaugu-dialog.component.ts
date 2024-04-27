import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-paslaugu-dialog',
  templateUrl: './paslaugu-dialog.component.html',
  styleUrl: './paslaugu-dialog.component.css'
})
export class PaslauguDialogComponent {
  constructor(private dialogRef: MatDialogRef<PaslauguDialogComponent>) { }

}
