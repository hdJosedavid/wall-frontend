import { Component, OnInit } from '@angular/core';
import { Bulletin } from '@app/services/interfaces';
import { RestService } from '@app/services/rest.service';
import { SharingService } from '@app/services/sharing.service';
import { THEME_TYPES } from '@app/shared/constants/theme';
import { environment } from '@environment/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { data } from '../../services/initial-data/bulletin.data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public theme: boolean = true;
  public bulletins: Bulletin[];
  public nameTheme: string;
  data$: Observable<Bulletin>;

  constructor(
    private restService: RestService,
    public sharingService: SharingService
  ) {
    this.nameTheme = THEME_TYPES.LIGTH;
    this.bulletins = data;
    this.data$ = sharingService.getSharingObservable;
    // sharingService.sharingObservableData = {content: "arsasars"};
  }

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this._getBulletin()
  }

  changeTheme() {
    this.theme = !this.theme;
    this.nameTheme = !this.theme ? THEME_TYPES.DARK : THEME_TYPES.LIGTH;
  }

  private _getBulletin(): void {
    this.restService.get(
      `${environment.apiBlog}/bulletins`
    ).pipe(
      map((response: any) => {
        return response.map((item: any) => {
          return {
            photo: 'https://randomuser.me/api/portraits/women/40.jpg',
            image: '/assets/images/posts/pexels-alena-koval-886521.jpg',
            text: item.body,
            sender: item.senderUserId,
            name: 'Iris Grethel',
            reactions: {
              commentaries: item.commentCounter,
              loves: Math.floor(Math.random() * 100)
            },
            items: data[0].items
          }
        })
      }),
      catchError(() => of([]))
    )
      .subscribe((response: any) => {
        // this.bulletins = response;
        console.log('bulletins', response);
      });
    console.log('Success!!');
  }

}
