import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  public user = {
    username : null,
    name : null,
    bio : null,
    isPrivate : null,
    tweets: []
  };

  public error = null;

  private routeName = this.route.snapshot.paramMap.get('username');

  constructor(
    private Jarwis: JarwisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.Jarwis.getUserInfo(this.routeName).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.user.username = data.user.username;
    this.user.name = data.user.name;
    this.user.bio = data.user.bio;
    this.user.isPrivate = data.user.isPrivate;
    this.user.tweets = data.tweets;
  }

  handleError(error) {
    this.error = error.error.error;
  };
  /*

  Kada se stisne na link nekog user salje se ovako
  this.router.navigate(['/user',user.username]);

   */
}
