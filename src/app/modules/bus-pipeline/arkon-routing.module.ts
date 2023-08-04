// bus-pipeline-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelineComponent } from './project/pipeline-arkon/page/pipeline/pipeline.component';
import { MapsComponent } from './project/pipeline-arkon/components/maps/maps.component';
import { MainComponent } from './project/pipeline-arkon/components/main/main.component';

// Import your component(s) that will be part of the module

const routes: Routes = [
  {
    path: 'pipeline', // The parent route path ('bus-pipeline') is empty to make it the default route
    component: PipelineComponent,

    children: [
      { path: 'main', component: MainComponent },
      { path: '', component: MapsComponent },
      { path: '**', redirectTo: '' }

      // Add more child routes as needed
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusPipelineRoutingModule { }