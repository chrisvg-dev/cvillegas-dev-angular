import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/models/course';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  fromPage!: string;
  fromDialog!: string;

  defaultUploadMessage: any = 'Drop files here.';

  uploadInfo: string = this.defaultUploadMessage;

  public courseForm!: FormGroup; 

  allFiles: File[] = [];
  file!: File;

  url: string = '';
  hasFile: boolean = false;

  validFormats: string = 'image/png, image/jpeg, image/jpg';

  constructor(private springBootService: SpringbootService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CoursesComponent>, private toastr: ToastrService) {}

  ngOnInit() {
    this.courseForm = this.formBuilder.group({   
      name: ['', Validators.required],
      description: ['', Validators.required],
      language: ['', Validators.required],
      type: ['', Validators.required],
      platform: ['', Validators.required],     
      certificate: ['']
   })

   this.fromDialog = "Success";
  }

  readURL(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
       this.url = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  droppedFiles(event: any): void {
    const allFiles: FileList = event;
    console.log(event);
    console.log('Cantidad: ' + allFiles);
    const filesAmount = allFiles.length;

    if (this.allFiles.length > 0) {
      this.toastr.error('No puedes agregar mas archivos');
      return;
    }

    if ( !this.validFormats.includes( allFiles[0].type ) ) {
      this.toastr.error('No puedes agregar este formato de archivo.');
      return;
    }

    this.file = allFiles[0];

    this.allFiles.push(this.file);
    this.hasFile = true;

    var reader = new FileReader();
    
    reader.onload = (event:any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(this.file);
    
    console.log( 'Cantidad: ' + this.allFiles.length );
  }

  uploadFile(event: any, fileType: string) {  
    this.updateFile(event, fileType);  
  }  

  private updateFile(event: Event, formControlName: string) {
    if (!event.target) {return;}

    const file = (event.target as HTMLInputElement);
    const certificate = file.files![0];
    this.courseForm.get('certificate')!.setValue(certificate);
  }

  submitForm() {

    if (!this.hasFile) { this.toastr.error('You need to add a certificate file.', 'Lack of information'); return; }

    let formData: FormData = new FormData();        
    let course = new Course(
      0,  
      this.courseForm.get('name')!.value, 
      this.courseForm.get('language')!.value,
      this.courseForm.get('description')!.value,
      this.courseForm.get('type')!.value,
      this.courseForm.get('platform')!.value,
      null
    );

    formData.append('course', new Blob([JSON.stringify(course)], { type: 'application/json' }));
    formData.append('file', this.file);

    this.springBootService.saveCourse(formData).subscribe({
      next: resp => {
        let data = resp as any;
        this.toastr.success(data.message, data.code);
        if (data.code == 'OK') {
          this.dialogRef.close({ event: 'close', data: resp });
        }
      },
      error: err => console.error(err)
    });
   
  } 

  closeDialog() { 
    this.dialogRef.close({ event: 'close', data: this.fromDialog }); 
  }
}
