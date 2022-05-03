import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModules} from '../../common/common.module';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserLoginComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModules
  ],
  exports: [
    UsersComponent,
    UserLoginComponent
  ]
})
export class UserModule { }
