import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCommentFooterComponent } from './media-comment-footer.component';

describe('MediaCommentFooterComponent', () => {
  let component: MediaCommentFooterComponent;
  let fixture: ComponentFixture<MediaCommentFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCommentFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCommentFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
