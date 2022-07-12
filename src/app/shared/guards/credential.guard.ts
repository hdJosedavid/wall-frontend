import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {LocalStorageService} from '@app/services/local-storage.service';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {AuthService} from "@app/services/auth.service";

@Injectable({providedIn: 'root'})
export class CredentialGuard implements CanActivate, CanDeactivate<unknown>, CanLoad {

  constructor(
    private cookieService: CookieService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogging(state.url);
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

  canLoad(
    route: import("@angular/router").Route,
    segments: import("@angular/router").UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = `/${route.path}`;
    return this.checkLogging(url);
  }

  checkLogging(url: string) {
    if (this.authService.isLoggedIn(url)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  redirect(flag: boolean, path: string): any {
    if (!flag) {
      this.router.navigate([path])
    }
  }

}
