import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project.model';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {

  fromPage!: string;
  fromDialog!: string;

  public projectForm!: FormGroup; 


  constructor(public dialogRef: MatDialogRef<ProjectFormComponent>, private springService: SpringbootService, private toastr: ToastrService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({   
      title: ['', Validators.required],
      description: ['', Validators.required],
      component: ['', Validators.required]
   })
  }

  closeDialog() { 
    this.dialogRef.close({ event: 'close', data: this.fromDialog }); 
  }

  submitForm() {
    let course = new Project(
      0,  
      this.projectForm.get('component')!.value,
      this.projectForm.get('description')!.value,
      this.projectForm.get('title')!.value, 
      '',
      '',
      ''
    );

    this.springService.saveProject(course).subscribe({
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

}