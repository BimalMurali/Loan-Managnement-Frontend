import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ModelsComponent } from './models/models.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [SharedComponent, ModelsComponent, NotfoundComponent, ServicesComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
