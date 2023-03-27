import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { ACTIVITIES } from './home.constants';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  activities = ACTIVITIES;
  user: string;
  title = 'HOME';

  constructor(
    private readonly navService: NavbarService,
    private readonly auth: AuthService,
  ) {
    this.navService.setTitle(this.title);
    this.navService.setShowUser(false);
    this.user = this.auth.user?.rol || 'User X';
  }

  ngOnDestroy(): void {
    this.navService.setShowUser(true);
  }
}
