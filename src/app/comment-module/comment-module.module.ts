import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentRoutingModule} from './comment-routing.module';
import {CommentService} from './services/comment.service';



@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    CommentRoutingModule
  ],
  providers: [CommentService]
})
export class CommentModuleModule { }
