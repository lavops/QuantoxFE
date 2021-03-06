import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {JarwisService} from '../../services/jarwis.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;

  public notify = {
    newFriends : [],
    newLikes : []
  }

  public users: any = [];

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private Jarwis: JarwisService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe( value => this.loggedIn = value);

    if (this.loggedIn) {
      this.Jarwis.getFollowNotify().subscribe(
        data => this.handleFollow(data)
      );

      this.Jarwis.getLikeNotify().subscribe(
        data => this.handleLike(data)
      );
    }

  }

  handleFollow(data) {
    this.notify.newFriends = data;
  }

  handleLike(data) {
    this.notify.newLikes = data;
  }

  acceptFollow(obj) {
    this.Jarwis.acceptFollow(obj).subscribe(
      data => this.handleFollow(data)
    );
  }

  declineFollow(obj) {
    this.Jarwis.declineFollow(obj).subscribe(
      data => this.handleFollow(data)
    );
  }

  dismissFollow(obj) {
    this.Jarwis.dismissFollow(obj).subscribe(
      data => this.handleFollow(data)
    );
  }

  dismissLike(obj) {
    this.Jarwis.dismissLike(obj).subscribe(
      data => this.handleLike(data)
    );
  }

  onSearch(event) {
    this.Jarwis.searchUsers(event.target.value).subscribe(
      data => this.users = data
    );
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.notify.newFriends = [];
    this.notify.newLikes = [];
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
