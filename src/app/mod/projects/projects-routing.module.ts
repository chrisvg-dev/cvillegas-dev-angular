import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './my-apps/tasks/tasks.component';
import { Base64ConverterComponent } from './my-apps/base64-converter/base64-converter.component';
import { CustomCrudAppComponent } from './my-apps/custom-crud-app/custom-crud-app.component';
import { MyCoursesComponent } from './my-apps/my-courses/my-courses.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'base64Converter', component: Base64ConverterComponent },  
  { path: 'custom-crud-app', component: CustomCrudAppComponent  },
  { path: 'my-courses', component: MyCoursesComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
