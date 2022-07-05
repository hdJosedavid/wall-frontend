import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-comment',
  templateUrl: './media-comment.component.html',
  styleUrls: ['./media-comment.component.scss']
})
export class MediaCommentComponent implements OnInit {
  @Input() data: any = {}

  public toggle: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  swToggle(): void {
    this.toggle = !this.toggle;
  }

}
