import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {LocalStorageService} from '@app/services/local-storage.service';
import {RestService} from '@app/services/rest.service';
import {of} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';

import {environment} from '@environment/environment'
import {SOCIAL_TYPES} from '@app/shared/constants/social';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public status: boolean = true;
  public networks: string[] = [];

  // TODO: Adding firstName and Lastname
  public signUpForm: FormGroup = this.formBuilder.group({
    username: [, [Validators.required, Validators.minLength(5)]],
    email: [, [Validators.required, Validators.minLength(8), Validators.email]],
    password: [, [Validators.required, Validators.minLength(5)]],
  });

  public loginForm: FormGroup = this.formBuilder.group({
    username: [, [Validators.required]],
    password: [, [Validators.required, Validators.minLength(5)]],
  })


  constructor(
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private localStorageService: LocalStorageService,
    private RestService: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.networks = [
      SOCIAL_TYPES.FACEBOOK,
      SOCIAL_TYPES.LINKEDIN,
      SOCIAL_TYPES.TWITTER
    ];
  }

  public isValidField(field: string): boolean | null {
    return this.loginForm.controls[field].errors && this.signUpForm.controls[field].touched;
  }

  public signUp(): void {
    console.log("signUp", this.loginForm.value);
    this.RestService.post(
      `${environment.apiUser}/api/auth/signup`,
      this.signUpForm.value
    ).subscribe((res: any) => { });
    this.status = !this.status;
  }

  public login(): void {
    this.RestService.post(
      `${environment.apiUser}/api/auth/login`,
      this.loginForm.value
    ).pipe(
      map((response: any) => {
        if (!response) {
          console.log('Error occurred.');
          throw new Error('Value expected!');
        }
        return response;
      }), retry(2),
      catchError(() => of([]))
    ).subscribe((res: any) => {
      this.cookieService.set('token_access', res.authenticationToken, 4, '/home');
      this.localStorageService._setCredentials(res);
      this.router.navigate(['/home']);
    });
  };

  public changeForm = (e: any) => {
    this.status = !this.status;
  }
}
