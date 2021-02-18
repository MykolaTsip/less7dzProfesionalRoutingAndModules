import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {CurrentPostComponent} from './components/current-post/current-post.component';


const routs: Routes = [
  {
path: '', component: AllPostsComponent, children: [
      {
        path: ':id', component: CurrentPostComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routs)
  ],

  exports: [RouterModule]
})
export class PostRoutingModule { }
