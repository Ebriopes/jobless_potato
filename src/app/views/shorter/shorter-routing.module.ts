import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShorterComponent } from './shorter.component';

const routes: Routes = [{ path: '', component: ShorterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShorterRoutingModule { }
