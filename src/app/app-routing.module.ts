import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { redirectTo: 'home', path: '', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
    data: {
      animation: 'HomePage',
    },
  },
  {
    path: 'rick-and-morty',
    loadChildren: () =>
      import('./views/rick-and-morty/rick-and-morty.module').then(
        (m) => m.RickAndMortyModule,
      ),
    data: { animation: 'RickPage' },
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./views/booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
