import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  fromPage!: string;
  fromDialog!: string;

  loading: boolean = false;

  constructor( public dialogRef: MatDialogRef<ContactComponent>, private springService: SpringbootService, private toastr: ToastrService ) {}

  closeDialog() { 
    this.dialogRef.close({ event: 'close', data: this.fromDialog }); 
  }

  sendMessage(message: string) {
    this.loading = true;
    this.springService.sendMessage( message, "Notification from cvillegas-dev.com" )
      .subscribe({
        next: (resp: any) => {
          if ( resp.code === 'OK' ) {
            this.toastr.success( resp.message )
            this.closeDialog()
          } else {
            this.toastr.error( resp.message )
          }
        },
        error: err => {
          console.error( err )
        },
        complete: () => this.loading = false
      });
  }
}
