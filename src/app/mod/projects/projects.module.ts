import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BackToListComponent } from './my-apps/utils/components/back-to-list/back-to-list.component';
import { TasksComponent } from './my-apps/tasks/tasks.component';
import { Base64ConverterComponent } from './my-apps/base64-converter/base64-converter.component';
import { CustomCrudAppComponent } from './my-apps/custom-crud-app/custom-crud-app.component';
import { MyCoursesComponent } from './my-apps/my-courses/my-courses.component';

import { DropzoneDirective } from './dropzone.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from 'src/app/mod/projects/my-apps/projects/projects.component';
import { SugestionsComponent } from './my-apps/sugestions/sugestions.component';
import { ProjectFormComponent } from './my-apps/dialog/project-form/project-form.component';
import { RankSystemComponent } from './my-apps/rank-system/rank-system.component';


@NgModule({
  declarations: [ TasksComponent, Base64ConverterComponent, BackToListComponent, CustomCrudAppComponent, MyCoursesComponent, DropzoneDirective, ProjectsComponent, SugestionsComponent, ProjectFormComponent, RankSystemComponent ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    MatTableModule, FormsModule, MatInputModule, MatButtonModule,
    MatDialogModule, MatPaginatorModule, ReactiveFormsModule, MatIconModule, MatToolbarModule, ToastrModule.forRoot(),
    MatTreeModule, MatProgressSpinnerModule
  ]
})
export class ProjectsModule { }
