import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  fromPage!: string;
  fromDialog!: string;

  constructor(
    public dialogRef: MatDialogRef<CertificateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public certificate: string
  ) { }

  ngOnInit(): void {
    this.fromDialog = "I am from dialog land..." + this.certificate;
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }
}
