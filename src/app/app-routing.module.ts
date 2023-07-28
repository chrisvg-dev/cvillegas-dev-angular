import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { PokeapiComponent } from './pages/pokeapi/pokeapi.component';
import { SpringbootSimpleCrudComponent } from './pages/springboot-simple-crud/springboot-simple-crud.component';
import { MonthlyPaymentsComponent } from './pages/monthly-payments/monthly-payments.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { LearningComponent } from './pages/learning/learning.component';
import { SugestionsComponent } from './components/sugestions/sugestions.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { Base64ConverterComponent } from './pages/project/base64-converter/base64-converter.component';

const routes: Routes = [
  {
    path: 'hello-world', component: HelloWorldComponent, pathMatch: 'full'
  },
  {
    path: 'github-profile', component: GithubComponent, pathMatch: 'full'
  },
  {
    path: 'pokeapi', component: PokeapiComponent, pathMatch: 'full'
  },
  {
    path: 'spring-simple-crud', component: SpringbootSimpleCrudComponent, pathMatch: 'full'
  },
  {
    path: 'monthly-payments', component: MonthlyPaymentsComponent
  },
  {
    path: 'my-courses', component: MyCoursesComponent
  },
  {
    path: 'my-learning', component: LearningComponent
  },
  {
    path: 'my-projects', component: ProjectsComponent
  },
  {
    path: 'base64Converter', component: Base64ConverterComponent
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  // Aqui van los proyectos
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
