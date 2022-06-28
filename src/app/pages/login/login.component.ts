import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public status: boolean = true;

  public networks: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.networks = ['facebook', 'linkedin', 'twitter'] 
  }

  public swTemplate(): void {
    console.log(323232, this.status);
    this.status = !this.status;
  }

  public signUp(): void {
  }

  public login(): void {
  };

  public changeForm = (e: any) => {
    this.swTemplate();
  }

}
