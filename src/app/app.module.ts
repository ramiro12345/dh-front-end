import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccesoGuard } from './guards/acceso.guard';
import { NewsModule } from './modules/news/news.module';
import { UserLoginComponent } from './modules/user/user-login/user-login.component';
import { UserModule } from './modules/user/user.module';
import { UsersComponent } from './modules/user/users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { UserHttpService } from './services/user/user.http.service';
import { BulletinHttpService } from './services/bulletin/bulletin.http.service';
import { BulletinComponent } from './modules/news/bulletin/bulletin.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    NewsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: UserLoginComponent },
      { path: 'list-users', component: UsersComponent, canActivate: [AccesoGuard] },
      { path: 'list-bulletin', component: BulletinComponent },
      //{ path: 'list-users', component: UsersComponent},
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]),
  ],
  providers: [
    UserHttpService,
    BulletinHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
