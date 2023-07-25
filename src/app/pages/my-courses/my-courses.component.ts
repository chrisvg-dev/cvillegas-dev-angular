import { Component, OnInit, ViewChild, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
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
  default: string = environment.DEFAULT;

  columnas: string[] = ['Id', 'Name', 'Description', 'Language', 'Type', 'Platform', 'Options'];
  datos: Course[] = [];

  articuloselect: Course = new Course(0, '','','','','','','','');

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;



  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']
  

  constructor(
    private springBootService: SpringbootService, 
    public dialog: MatDialog) {}

    openCompDialog() {
      const myCompDialog = this.dialog.open(CertificateComponent, { data: this.myFooList, width: '500px', height: '300px' });
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
      },
      error: error => { throw new Error(error) },
      complete: () => console.log('Process done')      
    });
  }

  changeCertificate(data: string): void {
    if (data) {
      this.default = data;
    }
  }

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    //this.datos.push(new Articulo(this.articuloselect.id, this.articuloselect.name, this.articuloselect.prize));
    //this.tabla1.renderRows();
    //this.articuloselect = new Articulo(0, "", 0);
  }
}
