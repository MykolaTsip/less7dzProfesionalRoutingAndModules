import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HelloComponent} from './components/hello/hello.component';

const routs: Routes = [
  // // 1
  // {
  //   path: '', outlet: 'header', component: HeaderComponent
  // },
  // {
  //   path: '', outlet: 'footer', component: FooterComponent
  // }

  // // 2
  // {
  //   path: 'showFooter', outlet: 'footer', component: FooterComponent
  // },
  // {
  //   path: 'showHeader', outlet: 'header', component: HeaderComponent
  // }

  {
    path: '', component: HelloComponent,
    children: [
      {
        path: 'users', loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule)
      },
      {
        path: 'posts', loadChildren: () => import('./post-module/post-module.module').then(m => m.PostModuleModule)
      },
      {
        path: 'comments', loadChildren: () => import('./comment-module/comment-module.module').then(m => m.CommentModuleModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
