import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Bulletin } from './interfaces';
import { data } from './initial-data/bulletin.data';

@Injectable()
export class SharingService {
  public sharingObservablePrivate: BehaviorSubject<Bulletin>;
  constructor() {
    this.sharingObservablePrivate = new BehaviorSubject<Bulletin>(data);
  }

  public get getSharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  public set setSharingObservableData(data: Bulletin) {
    this.sharingObservablePrivate.next(data);
  }
}