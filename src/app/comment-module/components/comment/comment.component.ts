import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
this.commentService.comments()
  .subscribe(com => this.comments = com);
  }

}
