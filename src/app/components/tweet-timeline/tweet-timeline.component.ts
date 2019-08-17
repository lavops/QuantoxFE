import {Component, Input, OnInit} from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {TimelineComponent} from '../timeline/timeline.component';

@Component({
  selector: 'app-tweet-timeline',
  templateUrl: './tweet-timeline.component.html',
  styleUrls: ['./tweet-timeline.component.sass']
})
export class TweetTimelineComponent implements OnInit {

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
    url : 'timeline'
  };

  public comment = {
    tweet_id : null,
    text : null,
  };

  public me = localStorage.getItem('me');
  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Timeline: TimelineComponent
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
      data => this.Timeline.RefreshTweet(data),
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