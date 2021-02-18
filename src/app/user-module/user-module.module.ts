import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [UserComponent, AllUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UserModuleRoutingModule
  ],

  providers: [UserService]
})
export class UserModuleModule { }
