import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTweetTimelineComponent } from './post-tweet-timeline.component';

describe('PostTweetTimelineComponent', () => {
  let component: PostTweetTimelineComponent;
  let fixture: ComponentFixture<PostTweetTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTweetTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTweetTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
