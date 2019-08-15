import { Component, OnInit, Input } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() public comment;

  public data = {
    name : null,
    username : null
  };

  public error = {};

  constructor(
    private Jarwis: JarwisService
  ) { }

  ngOnInit() {
    this.Jarwis.getUser(this.comment.user_id).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(user) {
    this.data.name = user.name;
    this.data.username  = user.username;
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
