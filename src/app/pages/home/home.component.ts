import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { environment } from '@environment/environment';
import { of } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public theme: boolean = true;
  public bulletins: any = [];

  constructor(
    private restService: RestService,
  ) { }

  ngOnInit(): void {
    this.getBulletin()
  }

  changeTheme() {
    this.theme = !this.theme;
  }

  getBulletin() {
    this.restService.get(
      `${environment.apiBlog}/bulletins`
    ).pipe(
      // map((res: any) => {
      //   if (!res.response) {
      //     console.log('Error occurred.');
      //     throw new Error('Value expected!');
      //   }
      //   return res.response;
      // }),
      retry(2), // Retry up to 3 times before failing
      catchError(() => of([]))
    )
    .subscribe((res: any) => {
      this.bulletins = res;
      console.log('bulletins', res);
    });
    console.log('Success!!');
  }

}
