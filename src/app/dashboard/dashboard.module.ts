import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SettingsComponent } from './page/settings/settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { ToastrModule } from 'ngx-toastr';
import { ProjectsModule } from '../mod/projects/projects.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './page/home/home.component';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';



@NgModule({
  declarations: [
    SettingsComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule, MatTableModule, MatInputModule,
    MatDialogModule, MatPaginatorModule, MatIconModule, MatToolbarModule, ToastrModule.forRoot(),
    MatTreeModule, MatProgressSpinnerModule, ProjectsModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatCheckboxModule,
    ToastModule, ConfirmDialogModule, ButtonModule, MessagesModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class DashboardModule { }
