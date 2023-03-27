import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { RickAndMortyComponent } from './rick-and-morty.component';

@NgModule({
  declarations: [RickAndMortyComponent],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class RickAndMortyModule {}
