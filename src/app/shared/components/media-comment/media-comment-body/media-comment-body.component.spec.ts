import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCommentBodyComponent } from './media-comment-body.component';

describe('MediaCommentBodyComponent', () => {
  let component: MediaCommentBodyComponent;
  let fixture: ComponentFixture<MediaCommentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCommentBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCommentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
