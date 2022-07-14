import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Palette} from './interfaces';
import {data} from './initial-data/palette.data';

@Injectable()
export class PaletteService {
    public paletteBehavior: BehaviorSubject<Palette>;

    constructor() {
        this.paletteBehavior = new BehaviorSubject<Palette>(data);
    }

    public get getSharingObservable() {
        return this.paletteBehavior.asObservable();
    }

    set setPaletteObservable(data: Palette) {
        this.paletteBehavior.next(data);
    }
}
