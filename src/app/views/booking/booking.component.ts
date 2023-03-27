import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, of, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { COUNTRIES } from './booking.constants';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  countries: { [key: string]: { country: string } } = {};

  constructor(
    private readonly navService: NavbarService,
    private readonly api: ApiService,
  ) {
    this.navService.setTitle('Reservas');
  }

  ngOnInit(): void {
    // this.api
    //   .get('https://api.first.org/data/v1/countries')
    of(COUNTRIES)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
