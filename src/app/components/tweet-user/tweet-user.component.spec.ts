import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetUserComponent } from './tweet-user.component';

describe('TweetUserComponent', () => {
  let component: TweetUserComponent;
  let fixture: ComponentFixture<TweetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
