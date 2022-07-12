import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  readonly IS_LOGGED_KEY = 'isLogged';
  public urlUserTryOpen = '';
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  constructor() { }

  login() {
    localStorage.setItem(this.IS_LOGGED_KEY, 'true');
    this.changeLoginStatusSubject.next(true);
  }

  logout() {
    localStorage.removeItem(this.IS_LOGGED_KEY);
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.IS_LOGGED_KEY);
    if (!isLogged) {
      this.urlUserTryOpen = url;
      return false;
    }
    return true;
  }
}
