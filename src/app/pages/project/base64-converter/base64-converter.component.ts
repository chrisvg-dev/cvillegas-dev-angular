import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-base64-converter',
  templateUrl: './base64-converter.component.html',
  styleUrls: ['./base64-converter.component.css']
})
export class Base64ConverterComponent {
  allFiles: File[] = [];
  file!: File;
  hasFile: boolean = false;

  defaultMessage: string = 'Drag your file here.';
  message: string = this.defaultMessage;

  data: any = {};

  base64: string = '';

  constructor(private springBootService: SpringbootService, private toastr: ToastrService) {}


  droppedFiles(allFiles: File[], event: any): void {
    const filesAmount = allFiles.length;
    console.log(filesAmount)

    if (this.allFiles.length > 0) {
      this.toastr.error('No puedes agregar mas archivos');
      return;
    }

    if (filesAmount > 1) {
      this.toastr.error('You can not add more than one file.');
      return;
    }

    this.file = allFiles[0];
    this.hasFile = true;

    this.allFiles.push(this.file);   
    console.log( 'Cantidad: ' + this.allFiles.length );
    this.message = 'You added a new file with this properties: ';
    this.data = {
      name: this.file.name,
      size: this.file.size,
      type: this.file.type
    }
  }

  cleanFiles() {
    this.allFiles = [];
    this.data = {};
    this.hasFile = false;
    this.toastr.success('All of files were deleted', 'File deletion');
  }

  convertToBase64() {
    if (this.allFiles.length < 1) {
      this.toastr.error('You must add one file before to send the request.');
      return;
    }

    let formData = new FormData();
    formData.append('file', this.file);

    this.springBootService.convertToBase64(formData).subscribe({
      next: (resp) => {
        const data = resp as any;
        console.log(data.message);
        this.base64 = data.message;
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }
}
