import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { ACTIVITIES } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activities = ACTIVITIES;
  user = 'User X';
  title = 'HOME';

  constructor(private readonly navService: NavbarService) {
    this.navService.setTitle(this.title);
  }

  ngOnInit(): void {}
}
