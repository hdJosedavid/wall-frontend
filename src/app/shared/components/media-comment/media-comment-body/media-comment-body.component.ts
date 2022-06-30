import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-comment-body',
  templateUrl: './media-comment-body.component.html',
  styleUrls: ['./media-comment-body.component.scss']
})
export class MediaCommentBodyComponent implements OnInit {
  @Input() data: any = {}

  constructor() { }

  ngOnInit(): void {
    console.log(1231, this.data)
  }

}
