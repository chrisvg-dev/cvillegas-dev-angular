import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectFormComponent } from '../dialog/project-form/project-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { SpringbootService } from 'src/app/services/springboot.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LocalAuthenticationService } from 'src/app/services/auth/local-authentication.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public data: any = [];

  columnas: string[] = ['Name', 'Description', 'Language', 'Link'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource:any;

  isLogged: boolean = false;

  constructor(private http: SpringbootService, private authService: LocalAuthenticationService, public dialog: MatDialog, private toastr: ToastrService){}
  
  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
    this.loadProjects();
  }

  loadProjects() {
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
  deleteItem(id: number): void {
    if ( confirm('Are you sure you want to delete this record?') ) {
      this.http.deleteProject(id).subscribe({
        next: (resp: any) => {
          console.log(resp)
          this.toastr.success(resp.text);
          this.loadProjects();
        },
        error: err => this.toastr.error(err),
        complete: () => console.log('Course deleted successfully')
      });
    }
  }

  openRegisterProjectDialog() {
    const courseDialog = this.dialog.open(ProjectFormComponent, { width: '600px' });
    courseDialog.afterClosed().subscribe((res) => {
      this.loadProjects();
    });
  }
}