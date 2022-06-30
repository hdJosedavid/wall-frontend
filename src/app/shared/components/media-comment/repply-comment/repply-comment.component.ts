import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repply-comment',
  templateUrl: './repply-comment.component.html',
  styleUrls: ['./repply-comment.component.scss']
})
export class RepplyCommentComponent implements OnInit {
  @Input() items: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
