import { Component, OnInit, Input } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() public comment;

  public error = {};

  constructor(
    private Jarwis: JarwisService
  ) { }

  ngOnInit() {
  }

}
