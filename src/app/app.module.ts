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
    MonthlyPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
