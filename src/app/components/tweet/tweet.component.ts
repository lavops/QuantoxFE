import { Component, OnInit , Input} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {subscribeOn} from 'rxjs/operators';
import {ProfileComponent} from '../profile/profile.component';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
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

  public delete = {
    id : null,
    url : 'profile'
  };

  public comment = {
    tweet_id : null,
    text : null,
  };

  public me = localStorage.getItem('me');
  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Profile: ProfileComponent
  ) { }

  onSubmitComment() {
    this.comment.tweet_id = this.tweet.id;
    this.Jarwis.postComment(this.comment).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    this.comment.text = null;
  }

  onDeleteTweet() {
    this.delete.id = this.tweet.id;
    this.Jarwis.deleteTweet(this.delete).subscribe(
      data => this.Profile.RefreshTweet(data),
      error => this.handleError(error)
    );
  }

  onDeleteComment(comment) {
    this.Jarwis.deleteComment(comment).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  ngOnInit() {
  }

  handleResponse(data) {
    this.tweet.comments = data;
    this.tweet.countComments = this.tweet.comments.length;
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
    this.tweet.countLikes = data.likes.length;
    this.tweet.isLiked = data.isLiked;
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
