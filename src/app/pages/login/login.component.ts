import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public status: boolean = true;

  public switchCtn: any = document.querySelector("#switch-cnt")!;
  public switchC1: any = document.querySelector("#switch-c1");
  public switchC2: any = document.querySelector("#switch-c2");

  public switchCircle: any = document.querySelectorAll(".switch__circle");
  public switchBtn: any = document.querySelectorAll(".switch-btn");
  public aContainer: any = document.querySelector("#a-container");
  public bContainer: any = document.querySelector("#b-container");
  public allButtons: any = document.querySelectorAll(".submit");

  constructor() { }

  ngOnInit(): void {

    // let getButtons = (e: any) => e.preventDefault();


    // let mainF = (e: any) => {
    //   for (let i = 0; i < allButtons.length; i++)
    //     allButtons[i].addEventListener("click", getButtons);
    //   for (let i = 0; i < switchBtn.length; i++)
    //     switchBtn[i].addEventListener("click", changeForm)
    // }
    // window.addEventListener("load", mainF);

  }

  public swTemplate(): void {
    console.log(323232, this.status);
    this.status = !this.status;
  }


  public getButtons(e: any): void {
    e.preventDefault()
  };

  public changeForm = (e: any) => {

    this.swTemplate();

    // this.switchCtn.classList.add("is-gx");

    // setTimeout(() => {
    //   this.switchCtn.classList.remove("is-gx");
    // }, 1500)

    // this.switchCtn.classList.toggle("is-txr");
    // this.switchCircle[0].classList.toggle("is-txr");
    // this.switchCircle[1].classList.toggle("is-txr");

    // this.switchC1.classList.toggle("is-hidden");
    // this.switchC2.classList.toggle("is-hidden");
    // this.aContainer.classList.toggle("is-txl");
    // this.bContainer.classList.toggle("is-txl");
    // this.bContainer.classList.toggle("is-z200");
  }

}
