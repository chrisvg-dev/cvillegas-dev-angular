import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { PokeapiComponent } from './pages/pokeapi/pokeapi.component';
import { SpringbootSimpleCrudComponent } from './pages/springboot-simple-crud/springboot-simple-crud.component';
import { MonthlyPaymentsComponent } from './pages/monthly-payments/monthly-payments.component';
import { LearningComponent } from './pages/learning/learning.component';
import { authenticationGuard } from './security/guards/auth.guard';
import { lazyAuthGuard } from './security/guards/lazy-auth.guard';



const routes: Routes = [
  // Modules
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
    path: 'my-learning', component: LearningComponent
  },
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },

  { path: 'projects', loadChildren: () => import('./mod/projects/projects-routing.module').then(m => m.ProjectsRoutingModule) },
  { 
    path: 'dashboard',
    canMatch: [lazyAuthGuard],
    loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) 
  },

  /* PROTECTED ROUTES */

  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
