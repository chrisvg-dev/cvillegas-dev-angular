import { Component, OnInit, ViewChild, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { timer } from 'rxjs';
import { CertificateComponent } from 'src/app/components/dialogs/certificate/certificate.component';
import { Articulo } from 'src/app/models/articulo';
import { Course } from 'src/app/models/course';
import { SpringbootService } from 'src/app/services/springboot.service';
import { environment } from 'src/environments/environment';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesComponent } from 'src/app/components/dialogs/courses/courses.component';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/security/jwt/local-storage-service.service';
import { LocalAuthenticationService } from 'src/app/services/auth/local-authentication.service';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  data: any[] = [];
  pageSize = [10];
  default: string = environment.DEFAULT;

  columnas: string[] = ['Id', 'Name', 'Description', 'Language', 'Type', 'Platform', 'Options'];
  datos: Course[] = [];

  articuloselect: Course = new Course(0, '','','','','','');

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  dataSource:any;

  certificate: any = null;

  isLogged: boolean = false;

  constructor(private springBootService: SpringbootService, 
    public dialog: MatDialog, 
    private toastr: ToastrService, 
    private authService: LocalAuthenticationService,) { }

  ngOnInit() {
    this.loadCertificatesByCriteria('');
    this.isLogged = this.authService.isLogged();
  }

  openRegisterCourseDialog() {
    const courseDialog = this.dialog.open(CoursesComponent, { data: this.data, width: '700px' });
    courseDialog.afterClosed().subscribe((res) => {
      console.log({ res });
      this.certificate = null;
      this.loadCertificatesByCriteria('');
    });
  }

  openCompDialog(certificate: number) {
    this.springBootService.findMyCertificate(certificate).subscribe({
      next: resp => {
        
        let value = this.nullSafe(resp);

        if (value != '') {
          const myCompDialog = this.dialog.open(CertificateComponent, { data: resp, width: '800px', height: 'auto' });
          myCompDialog.afterClosed().subscribe((res) => {
            console.log({ res });
          });
        } else {
          alert('There is no value');
        }

      },
      error: err => console.error(err)
    });
  }
  

  loadCertificatesByCriteria(criteria: string): any {
    this.springBootService.findMyCourses(criteria).subscribe({
      next: (data :any) => {
        console.log(data);
        this.data = JSON.parse(JSON.stringify(data));
        this.datos = data;

        this.dataSource = new MatTableDataSource<Course>(data.courses);
        this.dataSource.paginator = this.paginator;
      },
      error: error => { throw new Error(error) }    });
  }

  deleteCourseById(id: number): any {
    if (confirm('Are you sure you want delete this row?') ) {
      this.springBootService.deleteCourse(id).subscribe({
        next: (data) => {
          let resp = data as any;
          this.toastr.warning(resp.message, resp.code);
          this.loadCertificatesByCriteria('');
        },
        error: error => { throw new Error(error) }    });
    }
  }

  nullSafe(value: any): string {
    if (value == undefined || value == null) return '';
    return value;
  }
}
