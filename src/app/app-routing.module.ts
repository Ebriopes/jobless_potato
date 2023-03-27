import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
    canActivate: [authGuard],
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
    canActivate: [authGuard],
    data: { animation: 'RickPage' },
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./views/booking/booking.module').then((m) => m.BookingModule),
    canActivate: [authGuard],
    data: { animation: 'booking' },
  },
  {
    path: 'shorter',
    loadChildren: () =>
      import('./views/shorter/shorter.module').then((m) => m.ShorterModule),
    canActivate: [authGuard],
    data: { animation: 'shorter' },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
    data: { animation: 'login' },
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
