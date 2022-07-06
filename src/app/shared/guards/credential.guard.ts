import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {LocalStorageService} from '@app/services/local-storage.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CredentialGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(
    private cookieService: CookieService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const storage = JSON.parse(this.localStorageService._getTokenID());
    return storage !== null && storage.authenticationToken !== null;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const tmp = this.localStorageService._getCredentials();
    const cookie = this.cookieService.check('token_access');
    this.redirect(cookie, '/home');
    return true
  }

  redirect(flag: boolean, path: string): any {
    if (!flag) {
      this.router.navigate([path])
    }
  }

}
