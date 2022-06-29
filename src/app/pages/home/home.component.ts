import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public theme: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    console.log(this.theme)
    this.theme = !this.theme;
  }

}
