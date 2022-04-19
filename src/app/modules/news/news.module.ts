import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { HttpClientModule } from "@angular/common/http";
import { BulletinNewComponent } from './bulletin/bulletin-new/bulletin-new.component';


@NgModule({
  declarations: [
    BulletinComponent,
    BulletinNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  exports: [
    BulletinComponent
  ]
})
export class NewsModule { }
