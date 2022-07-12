import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-media-comment-body',
  templateUrl: './media-comment-body.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MediaCommentBodyComponent {
  @Input() data: any = {};

}
