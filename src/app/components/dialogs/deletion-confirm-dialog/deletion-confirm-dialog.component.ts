import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletion-confirm-dialog',
  templateUrl: './deletion-confirm-dialog.component.html',
  styleUrl: './deletion-confirm-dialog.component.css'
})
export class DeletionConfirmDialogComponent {
    constructor(
      public dialog: MatDialogRef<DeletionConfirmDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}

    closeDialog(): void {
      this.dialog.close(false);
    }
    confirm(): void {
      this.dialog.close(true);
    }
}
