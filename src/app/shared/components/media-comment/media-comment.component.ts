import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-comment',
  templateUrl: './media-comment.component.html',
  styleUrls: ['./media-comment.component.scss']
})
export class MediaCommentComponent implements OnInit {
  public data: any = {
    photo: 'https://randomuser.me/api/portraits/women/40.jpg',
    image: '/assets/images/posts/pexels-alena-koval-886521.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Iris Churman',
    reactions: {
      commentaries: 3,
      loves: 200
    },
    items: [{
      photo: 'https://randomuser.me/api/portraits/women/77.jpg',
      image: '/assets/images/posts/pexels-alena-koval-886521.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Iris Churman',
      reactions: {
        commentaries: 7,
        loves: 200
      },
    }, {
      photo: 'https://randomuser.me/api/portraits/women/55.jpg',
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Iris Churman',
      reactions: {
        commentaries: 5,
        loves: 200
      },
    }, {
      photo: 'https://randomuser.me/api/portraits/women/66.jpg',
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Iris Churman',
      reactions: {
        commentaries: 3,
        loves: 1000
      },
    }]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
