import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShorterRoutingModule } from './shorter-routing.module';
import { ShorterComponent } from './shorter.component';


@NgModule({
  declarations: [
    ShorterComponent
  ],
  imports: [
    CommonModule,
    ShorterRoutingModule
  ]
})
export class ShorterModule { }
