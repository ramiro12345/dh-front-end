import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './modules/user/user-login/user-login.component';
import { UsersComponent } from './modules/user/users/users.component';
import { BulletinComponent } from './modules/news/bulletin/bulletin.component';
import { AccesoGuard } from './guards/acceso.guard';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'list-users', component: UsersComponent, canActivate: [AccesoGuard] },
  { path: 'list-bulletin', component: BulletinComponent },
  //{ path: 'list-users', component: UsersComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
