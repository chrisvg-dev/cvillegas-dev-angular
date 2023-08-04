import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipelineComponent } from './project/pipeline-arkon/page/pipeline/pipeline.component';
import { AlcaldiasComponent } from './project/pipeline-arkon/components/alcaldias/alcaldias.component';
import { DatatableComponent } from './project/pipeline-arkon/components/datatable/datatable.component';
import { ItemComponent } from './project/pipeline-arkon/components/item/item.component';
import { MainComponent } from './project/pipeline-arkon/components/main/main.component';
import { MenuComponent } from './project/pipeline-arkon/components/menu/menu.component';
import { BusPipelineRoutingModule } from './arkon-routing.module';
import { MapsComponent } from './project/pipeline-arkon/components/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PipelineComponent,
    AlcaldiasComponent,
    DatatableComponent,
    ItemComponent,
    MainComponent,
    MenuComponent, MapsComponent
  ],
  imports: [
    CommonModule, BusPipelineRoutingModule, GoogleMapsModule, FormsModule, ReactiveFormsModule
  ]
})
export class BusPipelineModule { }
