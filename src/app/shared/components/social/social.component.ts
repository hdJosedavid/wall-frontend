import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent {

  @Input() networks: string[] = [];

  constructor() { }

}
