import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BulletinsModel} from '../../models/bulletins.model';
import {CommentsModel} from '../../models/comments.model';
import {BulletinNewComponent} from './bulletin/bulletin-new/bulletin-new.component';
import {BulletinComponent} from './bulletin/bulletin.component';


@NgModule({
  declarations: [
    BulletinComponent,
    BulletinNewComponent,
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
  providers: [
    BulletinsModel,
    CommentsModel
  ]
})
export class NewsModule {
}
