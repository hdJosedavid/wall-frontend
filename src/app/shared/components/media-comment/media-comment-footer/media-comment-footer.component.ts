import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-media-comment-footer',
  templateUrl: './media-comment-footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaCommentFooterComponent {

  @Input() reactions: any = {};

  public commentaries: number = 0;
  public loves: number = 0;

}
