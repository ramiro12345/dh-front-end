import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BulletinNewComponent} from './bulletin/bulletin-new/bulletin-new.component';
import {BulletinComponent} from './bulletin/bulletin.component';


@NgModule({
  declarations: [
    BulletinComponent,
    BulletinNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BulletinComponent
  ],
  providers: []
})
export class NewsModule {
}
