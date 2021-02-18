import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CommentComponent} from './components/comment/comment.component';


const routs: Routes = [
  {
    path: '', component: CommentComponent
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
export class CommentRoutingModule { }
