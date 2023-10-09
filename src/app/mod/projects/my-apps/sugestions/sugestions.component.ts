import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService } from 'src/app/services/springboot.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocalAuthenticationService } from 'src/app/services/auth/local-authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormComponent } from '../dialog/project-form/project-form.component';

@Component({
  selector: 'projects',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.css']
})
export class SugestionsComponent implements OnInit {
  public data: any = [];

  columnas: string[] = ['Name', 'Description', 'Language', 'Link'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource:any;

  isLogged: boolean = false;

  constructor(private http: SpringbootService, private authService: LocalAuthenticationService, public dialog: MatDialog){}
  
  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
    this.http.findProjects().subscribe(
      {
        next: resp => {
          this.data = resp;

          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
        }
      }
    );
  }

  openRegisterProjectDialog() {
    const courseDialog = this.dialog.open(ProjectFormComponent, { width: '600px' });
    courseDialog.afterClosed().subscribe((res) => {
      console.log({ res });
    });
  }

} 
