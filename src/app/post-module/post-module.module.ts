import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostRoutingModule} from './post-routing.module';
import {PostService} from './services/post.service';
import { CurrentPostComponent } from './components/current-post/current-post.component';



@NgModule({
  declarations: [AllPostsComponent, PostComponent, CurrentPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    PostRoutingModule
  ],

  providers: [PostService]
})
export class PostModuleModule { }
