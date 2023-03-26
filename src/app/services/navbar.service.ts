import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  get title(): Observable<string> {
    return this._title;
  }
  get showUser(): Observable<boolean> {
    return this._showUser;
  }

  private _showUser = new BehaviorSubject<boolean>(false);
  private _title = new BehaviorSubject<string>('Jobless Potato');

  constructor() {}

  setTitle(name: string): void {
    this._title.next(name);
  }

  setShowUser(value: boolean): void {
    this._showUser.next(value);
  }
}
