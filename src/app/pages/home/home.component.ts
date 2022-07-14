import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Bulletin, Palette} from '@app/services/interfaces';
import {RestService} from '@app/services/rest.service';
import {SharingService} from '@app/services/sharing.service';
import {THEME_TYPES} from '@app/shared/constants/theme';
import {environment} from '@environment/environment';
import {Observable, of, Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {data2} from '@app/services/initial-data/bulletin.data';
import {PaletteService} from "@app/services/palette.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  public theme: boolean = true;
  public bulletins: Bulletin[];
  public nameTheme: string;
  public dataTheme: string = 'default';
  public data$: Observable<Array<Bulletin>>;
  public palette$: Observable<Palette>;
  public subs1$: any;
  public subs2$: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private restService: RestService,
    public sharingService: SharingService,
    public paletteService: PaletteService,
  ) {
    this.nameTheme = THEME_TYPES.LIGHT;
    this.bulletins = data2;
    this.subs1$ = new Subscription();
    this.subs2$ = new Subscription();
    this.data$ = sharingService.getSharingObservable;
    this.palette$ = paletteService.getSharingObservable;
  }

  ngOnInit(): void {
    this._initialData();
  }

  ngOnDestroy(): void {
    this.subs1$.unsubscribe();
    this.subs2$.unsubscribe();
  }

  private _initialData() {
    console.log(37462387462384);
    this.changeDetectorRef.detach();
    this.data$.subscribe(resp => {
      console.log(66666, resp);
    });
    this._getBulletin();
    this.subs2$ = this.palette$.subscribe((res: any) => {
      this.dataTheme = res.color;
    });
  }


  private _getBulletin(): void {
    this.subs1$ = this.restService.get(`${environment.apiBlog}/bulletins`).pipe(
      catchError(() => of(data2)
      )
    ).subscribe((response: any) => {
      this.bulletins = this.dataUpdate(response);
      this.sharingService.sharingObservableData = this.dataUpdate(response);
      this.changeDetectorRef.detectChanges();
    });
  }

  dataUpdate(response: any): Bulletin[] {
    return response.map((item: any) => {
      const random = '2' + Math.floor(Math.random() * 100000);
      return {
        content: '',
        photo: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
        image: `https://images.pexels.com/photos/${random}/pexels-photo-${random}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=411&w=639`,
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

  activeAPI() {
    this.changeDetectorRef.reattach();
    this.changeDetectorRef.detectChanges();
  }
}
