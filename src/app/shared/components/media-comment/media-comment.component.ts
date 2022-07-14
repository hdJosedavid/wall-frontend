import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-media-comment',
  templateUrl: './media-comment.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MediaCommentComponent {
  @Input() data: any = {};
  public toggle: boolean = false;

  constructor(){
    console.log(3333, this.data);
  }

  swToggle(): void {
    this.toggle = !this.toggle;
  }

}
