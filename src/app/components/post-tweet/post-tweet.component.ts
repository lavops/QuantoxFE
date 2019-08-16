import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';
import {ProfileComponent} from '../profile/profile.component';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.sass']
})
export class PostTweetComponent implements OnInit {

  public tweet = {
    text : null
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private router: Router,
    private Profile: ProfileComponent
  ) { }

  onSubmit() {
    this.Jarwis.postTweet(this.tweet).subscribe(
      data => this.Profile.RefreshTweet(data),
      error => this.handleError(error)
    );
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
