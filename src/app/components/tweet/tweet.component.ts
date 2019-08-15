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
    comments : []
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
  }

  handleCommentResponse(data) {
    this.ngOnInit();
  }

  handleResponse(data) {
    this.data.comments = data;
  }

  handleError(error) {
    this.error = error.error.error;
  }


}
