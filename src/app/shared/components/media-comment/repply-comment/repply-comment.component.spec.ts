import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepplyCommentComponent } from './repply-comment.component';

describe('RepplyCommentComponent', () => {
  let component: RepplyCommentComponent;
  let fixture: ComponentFixture<RepplyCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepplyCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepplyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
