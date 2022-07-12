import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Bulletin} from './interfaces';
import {data2} from './initial-data/bulletin.data';

@Injectable()
export class SharingService {
  public sharingObservable: BehaviorSubject<Array<Bulletin>>;
  constructor() {
    this.sharingObservable = new BehaviorSubject<Array<Bulletin>>(data2);
  }

  public get getSharingObservable() {
    return this.sharingObservable.asObservable();
  }

  public set sharingObservableData(data: Array<Bulletin>) {
    this.sharingObservable.next(data);
  }
}
