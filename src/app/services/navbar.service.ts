import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private showUser$ = new BehaviorSubject<boolean>(false);
  private title$ = new BehaviorSubject<string>('Jobless Potato');

  get title(): Observable<string> {
    return this.title$;
  }
  get showUser(): Observable<boolean> {
    return this.showUser$;
  }

  constructor() {}

  setTitle(name: string): void {
    this.title$.next(name);
  }

  setShowUser(value: boolean): void {
    this.showUser$.next(value);
  }
}
