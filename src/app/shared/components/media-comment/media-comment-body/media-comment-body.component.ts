import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-media-comment-body',
  templateUrl: './media-comment-body.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaCommentBodyComponent {
  @Input() data: any = {};
  constructor(){
    console.log(7575757, this.data);
  }

}
