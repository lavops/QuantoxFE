import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public data = {
    tweets : null
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService
  ) { }

  RefreshTweet(data) {
    this.data.tweets = data;
  }

  ngOnInit() {
    this.Jarwis.getTweets().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.data.tweets = data;
  }

  handleError(error) {
    this.error = error.error.error;
  };

}
