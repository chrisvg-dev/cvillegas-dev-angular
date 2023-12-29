import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './page/settings/settings.component';
import { HomeComponent } from './page/home/home.component';
import { authenticationGuard } from '../security/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authenticationGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [authenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
