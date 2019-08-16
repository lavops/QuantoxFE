import {Component, Input, OnInit} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';

@Component({
  selector: 'app-tweet-user',
  templateUrl: './tweet-user.component.html',
  styleUrls: ['./tweet-user.component.sass']
})
export class TweetUserComponent implements OnInit {

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

  onSubmitComment() {
    this.comment.tweet_id = this.tweet.id;
    this.Jarwis.postComment(this.comment).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    this.comment.text = null;
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

  handleResponse(data) {
    this.data.comments = data;
  }

  handleGetLikesResponse(data) {
    this.data.likes = data.likes;
    this.data.isLiked = data.isLiked;
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

  handleError(error) {
    this.error = error.error.error;
  }

}
