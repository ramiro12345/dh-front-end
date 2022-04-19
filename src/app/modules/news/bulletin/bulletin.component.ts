import { Component, OnInit } from '@angular/core';
import { BulletinHttpService } from 'src/app/services/bulletin/bulletin.http.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.sass']
})
export class BulletinComponent implements OnInit {
  public dataBulletin: any;
  constructor(public serviceBulletin: BulletinHttpService) {
    this.dataBulletin = {
      accountId: '',
      senderUserId: '',
      body: '',
      commentsCounter: ''
    };
  }

  ngOnInit(): void {
    this.getBulletin();
  }

  getBulletin() {
    this.serviceBulletin.getBulletin().subscribe(
      data => {
        console.log("DATA", data);
      }, (err) => {
        console.log("Error", err);
      }
    );
  }

  saveBulletin() {
    this.serviceBulletin.saveBulletin('datos').subscribe(
      data => {
        console.log("DATA", data);
      }, (err) => {
        console.log("Error", err);
      }
    );
  }
}
