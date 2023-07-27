import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  public courseForm!: FormGroup; 

  constructor(private springBootService: SpringbootService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CoursesComponent>,) {}

  ngOnInit() {
    this.courseForm = this.formBuilder.group({   
      name: ['', Validators.required],
      description: ['', Validators.required],
      language: ['', Validators.required],
      type: ['', Validators.required],
      platform: ['', Validators.required],     
      certificate: [null, Validators.required]
   })

   this.fromDialog = "Success";
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
    let formData: any = new FormData();        
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
    formData.append('file', this.courseForm.get('certificate')!.value);

    this.springBootService.saveCourse(formData).subscribe({
      next: resp => {
        console.log(resp);
      },
      error: err => console.error(err)
    });
   
  } 

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }


}
