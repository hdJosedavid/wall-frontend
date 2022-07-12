import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Bulletin} from '@app/services/interfaces';
import {RestService} from '@app/services/rest.service';
import {SharingService} from '@app/services/sharing.service';
import {THEME_TYPES} from '@app/shared/constants/theme';
import {environment} from '@environment/environment';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {data2} from '@app/services/initial-data/bulletin.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

  public theme: boolean = true;
  public bulletins: Bulletin[];
  public nameTheme: string;
  public data$: Observable<Array<Bulletin>>;

  constructor(
    // private changeDetectorRef: ChangeDetectorRef,
    private restService: RestService,
    public sharingService: SharingService
  ) {
    // this.changeDetectorRef.detach();
    this.nameTheme = THEME_TYPES.LIGHT;
    this.bulletins = data2;
    this.data$ = sharingService.getSharingObservable;
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this._getBulletin()
  }

  private _getBulletin(): void {
    this.restService.get(`${environment.apiBlog}/bulletins`).pipe(
      catchError(() => of([])
      )
    ).subscribe((response: any) => {
      this.bulletins = this.dataUpdate(response)
    })
  }

  dataUpdate(response: any): Bulletin[] {
    return response.map((item: any) => {
      return {
        content: '',
        photo: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
        image: `https://random.imagecdn.app/750/400`,
        text: item.body,
        name: 'Iris Grethel',
        reactions: {
          commentaries: item.commentCounter,
          loves: Math.floor(Math.random() * 100)
        }
      }
    });
  }

  changeTheme() {
    this.theme = !this.theme;
    this.nameTheme = !this.theme ? THEME_TYPES.DARK : THEME_TYPES.LIGHT;
  }

}
