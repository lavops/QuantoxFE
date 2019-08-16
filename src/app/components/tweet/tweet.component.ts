import { Component, OnInit , Input} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass']
})
export class TweetComponent implements OnInit {

  @Input() public tweet;
  @Input() public name;

  public data = {
    username : null,
    name : null,
    comments : [],
    likes : [],
    isLiked : false
  };

  public comment = {
    tweet_id : null,
    text : null,
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService
  ) { }

  onSubmit() {
    this.comment.tweet_id = this.tweet.id;
    this.Jarwis.postComment(this.comment).subscribe(
      data => this.handleCommentResponse(data),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
    this.Jarwis.getComments(this.tweet.id).subscribe(
        data => this.handleResponse(data),
      error => this.handleError(error)
    );

    this.Jarwis.getLikes(this.tweet.id).subscribe(
      data => this.handleGetLikesResponse(data),
      error => this.handleError(error)
    );
  }

  handleCommentResponse(data) {
    this.ngOnInit();
  }

  handleResponse(data) {
    this.data.comments = data;
  }

  handleGetLikesResponse(data) {
    this.data.likes = data.likes;
    this.data.isLiked = data.isLiked;
  }

  handleError(error) {
    this.error = error.error.error;
  }

  onSubmitLike() {
    this.Jarwis.likeTweet(this.tweet).subscribe(
      data => this.handleLikeResponse(data),
      error => this.handleError(error)
    );
  }

  onSubmitUnlike() {
    this.Jarwis.unlikeTweet(this.tweet).subscribe(
      data => this.handleLikeResponse(data),
      error => this.handleError(error)
    );
  }

  handleLikeResponse(data) {
    this.data.likes = data.likes;
    this.data.isLiked = data.isLiked;
  }

}
