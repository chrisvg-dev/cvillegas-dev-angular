import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpringbootService } from 'src/app/services/springboot.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  fromPage!: string;
  fromDialog!: string;
  certificateString: string = environment.DEFAULT;

  constructor(
    public dialogRef: MatDialogRef<CertificateComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public certificate: string,
    private springBoot: SpringbootService
  ) {
    this.certificateString = certificate;
  }

  ngOnInit(): void {
    this.fromDialog = "Success";
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }
}
