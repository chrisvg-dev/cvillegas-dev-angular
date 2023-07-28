import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route } from '@angular/router';
import { LoginComponent } from 'src/app/security/dialogs/login/login.component';
import { LocalStorageService } from 'src/app/security/jwt/local-storage-service.service';
import { LocalAuthenticationService } from 'src/app/services/auth/local-authentication.service';
import { SpringbootService } from 'src/app/services/springboot.service';
import { RouterUtilsService } from 'src/app/utils/router-utils.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  isLogged: boolean = false;

  constructor(
    public dialog: MatDialog, 
    private spring: SpringbootService, 
    private router: RouterUtilsService, 
    private authService: LocalAuthenticationService,
    ){}
    
  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
  }
  
  openLoginDialog() {
    const courseDialog = this.dialog.open(LoginComponent, { width: '700px', height: '250px' });
    courseDialog.afterClosed().subscribe((res) => {
      console.log({ res });
      this.isLogged = this.authService.isLogged();
    });
  }

  logOut() {
    if ( confirm('Desea cerrar sesion?') ) {
      this.spring.logOut().subscribe({
        next: resp => {
          console.log(resp);
          this.authService.setLogged( 'false' );
          this.isLogged = false;
          this.router.reloadCurrentRoute();
        }
      });
    }
  }
}
