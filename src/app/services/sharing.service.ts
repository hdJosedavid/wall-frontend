import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Bulletin} from './interfaces';
import {data} from './initial-data/bulletin.data';

@Injectable()
export class SharingService {
  public sharingObservable: BehaviorSubject<Bulletin>;
  constructor() {
    this.sharingObservable = new BehaviorSubject<Bulletin>(data);
  }

  public get getSharingObservable() {
    return this.sharingObservable.asObservable();
  }

  public set setSharingObservableData(data: Bulletin) {
    this.sharingObservable.next(data);
  }
}
