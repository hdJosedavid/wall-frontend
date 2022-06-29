import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { RestService } from '@app/services/rest.service';

import { environment } from '@environment/environment'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public status: boolean = true;
  public networks: string[] = [];

  public signUpForm: FormGroup = this.formBuilder.group({
    // firstname: [, [Validators.required]],
    // lastname: [, [Validators.required]],
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
    this.networks = ['facebook', 'linkedin', 'twitter']
  }

  public isValidField(field: string): boolean | null {
    return this.loginForm.controls[field].errors && this.signUpForm.controls[field].touched;
  }

  public signUp(): void {
    console.log("signUp", this.loginForm.value);
    this.RestService.post(
      `${environment.apiUser}/api/auth/signup`,
      this.signUpForm.value
    ).subscribe((res: any) => {
      // this.router.navigateByUrl('/home');
    });
    console.log('Success!!');
    this.status = !this.status;
  }

  public login(): void {
    this.RestService.post(
      `${environment.apiUser}/api/auth/login`,
      this.loginForm.value
    ).subscribe((res: any) => {
      console.info('Login Exitoso!!');
      this.cookieService.set('token_access', res.authenticationToken, 4, '/home');
      this.localStorageService.setCredentials(res);
      this.router.navigate(['/home']);
    });
  };

  public changeForm = (e: any) => {
    this.status = !this.status;
  }

}
