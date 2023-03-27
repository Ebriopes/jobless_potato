import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, of, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { GenericModalComponent } from 'src/app/shared/components/generic-modal/generic-modal.component';
import { ICountries } from 'src/app/interfaces/countries.interface';
import { COUNTRIES, DAY_MS, MONTH_MS, YEAR_MS } from './booking.constants';

interface IDdate {
  day: number;
  month?: number;
  year?: number;
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  minDate: string;
  maxDate: string;
  countries: ICountries = {};
  bookingForm: FormGroup<any>;

  constructor(
    private readonly navService: NavbarService,
    private readonly api: ApiService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
  ) {
    this.navService.setTitle('Reservas');

    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      date: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('.+@(hotmail|gmail).com'),
        ],
      ],
    });

    this.minDate = this.getDate({ day: 0, month: 11 }, false);
    this.maxDate = this.getDate({ day: 1 });
  }

  ngOnInit(): void {
    this.api
      .get('https://api.first.org/data/v1/countries')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (countries: any) => {
          this.countries = countries as ICountries;
        },
        error: () => {
          this.countries = COUNTRIES;
        },
      });

    console.log(this.getDate({ day: 0, month: 11 }, false));

    this.bookingForm.valueChanges.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  openDialog() {
    this.dialog.open(GenericModalComponent, {
      data: this.bookingForm.value,
    });
  }

  resetForm() {
    this.bookingForm.reset();
  }

  private getDate({ day, month, year }: IDdate, after = true) {
    const dateInMs =
      day * DAY_MS +
      (month ? month * MONTH_MS : 0) +
      (year ? year * YEAR_MS : 0);

    const newDate = Date.now() + (after ? dateInMs : -dateInMs);

    const dateString = new Date(newDate)
      .toLocaleDateString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .split('/')
      .reverse()
      .join('-');

    return dateString;
  }
}
