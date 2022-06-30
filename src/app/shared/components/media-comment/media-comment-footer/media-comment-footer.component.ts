import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-comment-footer',
  templateUrl: './media-comment-footer.component.html',
  styleUrls: ['./media-comment-footer.component.scss']
})
export class MediaCommentFooterComponent implements OnInit {

  @Input() reactions: any = {};

  public commentaries: number = 0;
  public loves: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
