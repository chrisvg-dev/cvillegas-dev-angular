import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-base64-converter',
  templateUrl: './base64-converter.component.html',
  styleUrls: ['./base64-converter.component.css']
})
export class Base64ConverterComponent {
  allFiles: File[] = [];
  hasFile: boolean = false;
  defaultMessage: string = 'Drag your files here.';
  message: string = this.defaultMessage;
  base64: string = '';

  columnas: string[] = ['Name', 'FileSize', 'FileType', 'Base64'];
  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor(private springBootService: SpringbootService, private toastr: ToastrService) {}

  deleteItemFromFiles(idx: number) {
    this.allFiles.splice(idx, 1);
    this.toastr.success( 'Item was removed...', 'File deletion' );
  }


  droppedFiles(files: File[], event: any): void {
    const filesAmount = files.length;
    if ((this.allFiles.length + filesAmount) > 7) {
      this.toastr.error('No puedes agregar mas de 5 archivos');
      return;
    }

    this.allFiles.push(...files);
    this.hasFile = true;

    console.log(this.allFiles);
  }

  cleanFiles() {
    this.allFiles = [];
    this.hasFile = false;
    this.toastr.success('All of files were deleted', 'File deletion');
  }

  copyBase64String(base64: string) {
    this.base64 = base64;
  }

  convertToBase64() {
    if (this.allFiles.length < 1) {
      this.toastr.error('You must add one file before to send the request.');
      return;
    }

    let formData = new FormData();
    
    this.allFiles.forEach ((file) => {
      formData.append('file[]', file);
    });

    this.springBootService.convertToBase64(formData).subscribe({
      next: (resp) => {
        const data = resp as any;
        this.dataSource = new MatTableDataSource(data.base64);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err)
        throw new Error(err);
      }
    });
  }
}
