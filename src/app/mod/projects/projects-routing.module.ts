import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './my-apps/tasks/tasks.component';
import { Base64ConverterComponent } from './my-apps/base64-converter/base64-converter.component';
import { CustomCrudAppComponent } from './my-apps/custom-crud-app/custom-crud-app.component';
import { MyCoursesComponent } from './my-apps/my-courses/my-courses.component';
import { ProjectsComponent } from 'src/app/mod/projects/my-apps/projects/projects.component';
import { RankSystemComponent } from './my-apps/rank-system/rank-system.component';
import { EmailSenderComponent } from './my-apps/email-sender/email-sender.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'base64Converter', component: Base64ConverterComponent },  
  { path: 'custom-crud-app', component: CustomCrudAppComponent  },
  { path: 'my-courses', component: MyCoursesComponent  },
  { path: 'page-ranking', component: RankSystemComponent  },
  { path: 'email-sender', component: EmailSenderComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
