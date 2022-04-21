import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsModule } from './modules/news/news.module';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from "@angular/common/http";
import { UserHttpService } from './services/user/user.http.service';
import { BulletinHttpService } from './services/bulletin/bulletin.http.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    NewsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    UserHttpService,
    BulletinHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
