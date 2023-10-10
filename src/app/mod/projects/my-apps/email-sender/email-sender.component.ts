import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css']
})
export class EmailSenderComponent {
  fromPage!: string;
  fromDialog!: string;

  loading: boolean = false;

  constructor( private springService: SpringbootService, private toastr: ToastrService ) {}

  sendMessage(message: string) {

    if ( message === '' ) {
      this.toastr.error( 'Message must not be empty' )
      return;
    }

    this.loading = true;
    this.springService.sendMessage( message, "Notification from cvillegas-dev.com" )
      .subscribe({
        next: (resp: any) => {
          if ( resp.code === 'OK' ) {
            this.toastr.success( resp.message )
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
