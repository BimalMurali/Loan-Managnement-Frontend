import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanofficerRoutingModule } from './loanofficer-routing.module';
import { LoanofficerComponent } from './loanofficer.component';


@NgModule({
  declarations: [LoanofficerComponent],
  imports: [
    CommonModule,
    LoanofficerRoutingModule
  ]
})
export class LoanofficerModule { }
