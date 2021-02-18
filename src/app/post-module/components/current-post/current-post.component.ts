import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
   post: Post;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      // console.log(this.router.getCurrentNavigation().extras.state.post);  чомусь не працює
    this.post = history.state.post;
    });
  }

}
