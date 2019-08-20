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

  public comment = {
    tweet_id : null,
    text : null,
  };

  public me = localStorage.getItem('me');
  public error = null;

  constructor(
    private Jarwis: JarwisService
  ) { }

  ngOnInit() {
  }

  onSubmitComment() {
    this.comment.tweet_id = this.tweet.id;
    this.Jarwis.postComment(this.comment).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    this.comment.text = null;
  }

  onDeleteComment(comment) {
    this.Jarwis.deleteComment(comment).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.tweet.comments = data;
    this.tweet.countComments = data.length;
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
    this.tweet.countLikes = data.likes.length;
    this.tweet.isLiked = data.isLiked;
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
