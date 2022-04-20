import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletinComponent } from './bulletin/bulletin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BulletinNewComponent } from './bulletin/bulletin-new/bulletin-new.component';


@NgModule({
  declarations: [
    BulletinComponent,
    BulletinNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BulletinComponent
  ]
})
export class NewsModule { }
