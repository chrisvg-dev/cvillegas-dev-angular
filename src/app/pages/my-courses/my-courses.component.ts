import { Component, OnInit, ViewChild, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CertificateComponent } from 'src/app/components/dialogs/certificate/certificate.component';
import { Articulo } from 'src/app/models/articulo';
import { Course } from 'src/app/models/course';
import { SpringbootService } from 'src/app/services/springboot.service';
import { environment } from 'src/environments/environment';

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

  articuloselect: Course = new Course(0, '','','','','','','','');

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  dataSource:any;

  certificate = environment.DEFAULT;
  
  constructor(private springBootService: SpringbootService, public dialog: MatDialog) {}

  openCompDialog(certificate: string) {
    if (certificate == null) {
      certificate = this.certificate;
    }
    const myCompDialog = this.dialog.open(CertificateComponent, { data: certificate, width: '900px', height: 'auto' });
    myCompDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }
  
  ngOnInit(): void {
    this.springBootService.findMyCourses().subscribe({
      next: (data) => {
        this.data = data;
        this.datos = data;

        this.dataSource = new MatTableDataSource<Course>(this.datos);
        this.dataSource.paginator = this.paginator;
      },
      error: error => { throw new Error(error) },
      complete: () => console.log('Process done')      
    });
  }
}
