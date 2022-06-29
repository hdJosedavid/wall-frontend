import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCommentComponent } from './media-comment.component';

describe('MediaCommentComponent', () => {
  let component: MediaCommentComponent;
  let fixture: ComponentFixture<MediaCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
