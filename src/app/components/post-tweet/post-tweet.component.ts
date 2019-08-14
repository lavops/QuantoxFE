import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';

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
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.postTweet(this.tweet).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    // console.log(data);
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
