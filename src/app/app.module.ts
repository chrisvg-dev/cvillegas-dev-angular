import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapsIconsComponent } from './components/svg/bootstraps-icons/bootstraps-icons.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SugestionsComponent } from './components/sugestions/sugestions.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { HomeComponent } from './pages/home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './pages/github/github.component';
import { PokeapiComponent } from './pages/pokeapi/pokeapi.component';
import { SpringbootSimpleCrudComponent } from './pages/springboot-simple-crud/springboot-simple-crud.component';

import { MonthlyPaymentsComponent } from './pages/monthly-payments/monthly-payments.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CertificateComponent } from './components/dialogs/certificate/certificate.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { CoursesComponent } from './components/dialogs/courses/courses.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { NotificationComponent } from './components/dialogs/notification/notification.component';

import { ToastrModule } from 'ngx-toastr';
import { DropzoneDirective } from './dropzone.directive';

import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
    AppComponent,
    BootstrapsIconsComponent,
    MainMenuComponent,
    SugestionsComponent,
    HelloWorldComponent,
    HomeComponent,
    GithubComponent,
    PokeapiComponent,
    SpringbootSimpleCrudComponent,
    MonthlyPaymentsComponent,
    MyCoursesComponent,
    CertificateComponent,
    CoursesComponent,
    NotificationComponent,
    DropzoneDirective,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatTableModule, FormsModule, MatInputModule, MatButtonModule,
    MatDialogModule, MatPaginatorModule, ReactiveFormsModule, MatIconModule, MatToolbarModule, ToastrModule.forRoot(),
    MatTreeModule, MatProgressSpinnerModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
