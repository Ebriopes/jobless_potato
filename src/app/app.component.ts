import { Component, OnDestroy, OnInit } from '@angular/core';
import { ROUTES } from './app.constants';
import { NavbarService } from './services/navbar.service';
import { Subject, takeUntil } from 'rxjs';
import { IRoute } from './interfaces/route.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  routes: IRoute[] = ROUTES;
  showUser = false;
  title: string = '';

  private readonly unsubscribe: Subject<void> = new Subject();

  constructor(private readonly navService: NavbarService) {}

  ngOnInit(): void {
    this.navService.title
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((title) => {
        this.title = title;
      });

    this.navService.showUser
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((showUser) => {
        this.showUser = showUser;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
