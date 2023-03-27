import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, of, throwError } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

const USERS = new Map([
  ['ROL-A', 'RolAPwd#'],
  ['ROL-B', 'RolBPwd#'],
]);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get logged() {
    return this.auth$;
  }

  isLoggedIn = false;
  auth$ = new BehaviorSubject(false);
  user: IUser | undefined;
  redirectUrl: string | null = null;

  constructor(private readonly router: Router) {}

  login(rol: string, password: string) {
    const authRes = this.verifyUser(rol, password);

    return authRes.pipe(
      map((user: IUser) => {
        this.user = user;
        this.isLoggedIn = true;
        sessionStorage.setItem('user', JSON.stringify(user));
        this.auth$.next(true);

        this.router.navigateByUrl('/home');

        return user;
      }),
    );
  }

  logout() {
    sessionStorage.removeItem('user');
    this.auth$.next(false);
    this.user = undefined;
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

  private verifyUser(rol: string, password: string) {
    return USERS.get(rol) === password
      ? of({ rol })
      : throwError(() => new Error('Loging Failed'));
  }
}
