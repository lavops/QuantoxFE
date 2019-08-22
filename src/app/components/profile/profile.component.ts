import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile = {
    username : null,
    name : null,
    email : null,
    bio : null,
    isPrivate : null,
    tweets : [],
    following : [],
    followers: [],
    imgURL : [],
    liked : []
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService
  ) { }

  RefreshTweet($tweets) {
    this.profile.tweets = $tweets;
  }

  ngOnInit() {
    this.Jarwis.getProfile().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    // console.log(data);
    this.profile.username = data.user.username;
    this.profile.name = data.user.name;
    this.profile.email = data.user.email;
    this.profile.bio = data.user.bio;
    this.profile.tweets = data.tweets;
    this.profile.isPrivate = data.user.isPrivate;
    this.profile.following = data.following;
    this.profile.followers = data.followers;
    this.profile.imgURL = data.user.imgURL;
    this.profile.liked = data.liked;
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
