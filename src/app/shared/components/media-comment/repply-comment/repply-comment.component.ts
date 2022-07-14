import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-repply-comment',
  templateUrl: './repply-comment.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class RepplyCommentComponent{

  @Input() items: any[] = [];

  constructor() { }

}
