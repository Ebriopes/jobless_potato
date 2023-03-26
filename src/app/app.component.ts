import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NavbarService } from './services/navbar.service';
import { ROUTES } from './app.constants';
import { IRoute } from './interfaces/route.interface';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  routes: IRoute[] = ROUTES;
  showUser = false;
  title: string = '';
  routeState = null;

  private readonly unsubscribe: Subject<void> = new Subject();

  constructor(
    private readonly navService: NavbarService,
    private readonly contexts: ChildrenOutletContexts,
  ) {}

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

  getRouterAnimationState(): string {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
