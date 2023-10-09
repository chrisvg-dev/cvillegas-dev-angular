import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SpringbootService } from 'src/app/services/springboot.service';
import { LocalStorageService } from '../../jwt/local-storage-service.service';
import { RouterUtilsService } from 'src/app/utils/router-utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;
  fromPage!: string;
  fromDialog!: string;

  constructor(
    private springBootService: SpringbootService, 
    public dialogRef: MatDialogRef<LoginComponent>, 
    private toastr: ToastrService, 
    private formBuilder: FormBuilder, 
    private storage: LocalStorageService,
    private router: RouterUtilsService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({   
      email: ['', Validators.email],
      password: ['', Validators.required],
   })
  }

  closeDialog() { 
    this.dialogRef.close({ event: 'close', data: this.fromDialog }); 
  }

  onSubmit () {
    const request = {
      username: this.loginForm.get('email')!.value,
      password: this.loginForm.get('password')!.value,
    }

    this.springBootService.login(request).subscribe({
      next: resp => {
        console.log(resp);
        const user = resp as any;

        if (user.status == 'BAD_REQUEST') {
          
        }

        switch( user.status ) {
          case 'OK': 
            this.toastr.success(user.message, user.status);
            this.router.reloadCurrentRoute();
            this.storage.set('isLogged', user.status === 'OK' ? 'true' : 'false');
            this.closeDialog();
            break;
          case 'BAD_REQUEST': 
            this.toastr.error(user.message, user.status); 
            break;
        }
      },
      error: error => {
        console.log(error);
        throw new Error(error)
      }
    });
  }

  
}
