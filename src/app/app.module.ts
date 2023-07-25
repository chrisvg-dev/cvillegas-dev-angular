import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapsIconsComponent } from './components/svg/bootstraps-icons/bootstraps-icons.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SugestionsComponent } from './components/sugestions/sugestions.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './pages/github/github.component';
import { PokeapiComponent } from './pages/pokeapi/pokeapi.component';
import { SpringbootSimpleCrudComponent } from './pages/springboot-simple-crud/springboot-simple-crud.component';

import { MonthlyPaymentsComponent } from './pages/monthly-payments/monthly-payments.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { CertificateComponent } from './components/dialogs/certificate/certificate.component';


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
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, BrowserAnimationsModule,
    MatTableModule, FormsModule, MatInputModule, MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
