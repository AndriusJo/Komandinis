import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './server-gif-dialog.component.html',
})
export class ServerGifDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}