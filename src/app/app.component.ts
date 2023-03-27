import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NavbarService } from './services/navbar.service';
import { ROUTES } from './app.constants';
import { IRoute } from './interfaces/route.interface';
import { slideInAnimation } from './animation';
import { AuthService } from './services/auth.service';
import { IUser } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  routes: IRoute[] = ROUTES;
  user: IUser | undefined;
  showUser = false;
  title: string = '';
  routeState = null;
  openSidenav = false;

  private readonly unsubscribe: Subject<void> = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly navService: NavbarService,
    private readonly contexts: ChildrenOutletContexts,
  ) {}

  ngOnInit(): void {
    this.authService.logged
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((logged) => {
        this.openSidenav = logged;
        this.user = this.authService.user;
      });

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

  logout() {
    this.authService.logout();
  }
}
