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
    @Optional() @Inject(MAT_DIALOG_DATA) public certificate: number,
    private springBoot: SpringbootService
  ) { }

  ngOnInit(): void {
    this.fromDialog = "I am from dialog land...";
    this.loadCertificateFromDatabase(this.certificate);
  }

  loadCertificateFromDatabase(certificateId: number) {
    this.springBoot.findMyCertificate(certificateId).subscribe({
      next: resp => {
        console.log(resp)
        this.certificateString = resp;
      },
      error: err => console.error(err)
    });
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }
}
