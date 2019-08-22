import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';
import {TimelineComponent} from '../timeline/timeline.component';

@Component({
  selector: 'app-post-tweet-timeline',
  templateUrl: './post-tweet-timeline.component.html',
  styleUrls: ['./post-tweet-timeline.component.scss']
})
export class PostTweetTimelineComponent implements OnInit {

  public tweet = {
    text : null,
    url : 'timeline'
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private router: Router,
    private Timeline: TimelineComponent
  ) { }

  onSubmit() {
    this.Jarwis.postTweet(this.tweet).subscribe(
      data => this.Timeline.RefreshTweet(data),
      error => this.handleError(error)
    );
    this.tweet.text = '';
  }

  handleResponse(data) {
    this.redirectTo('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  redirectTo(url) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]));
  }

  ngOnInit() {
  }

}
