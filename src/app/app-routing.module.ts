import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessGuard} from './guards/access.guard';
import {UserLoginComponent} from './modules/user/user-login/user-login.component';
import {UsersComponent} from './modules/user/users/users.component';
import {BulletinComponent} from './modules/news/bulletin/bulletin.component';

const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  {path: 'list-users', component: UsersComponent, },//canActivate: [AccessGuard]
  {path: 'list-bulletin', component: BulletinComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
