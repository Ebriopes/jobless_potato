import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ShorterRoutingModule } from './shorter-routing.module';
import { ShorterComponent } from './shorter.component';

@NgModule({
  declarations: [ShorterComponent],
  imports: [
    CommonModule,
    ShorterRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class ShorterModule {}
