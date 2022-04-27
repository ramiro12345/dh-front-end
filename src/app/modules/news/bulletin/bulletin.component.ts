import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html'
})
export class BulletinComponent implements OnInit {
  public bodyContentBulletin: string;
  public dataBulletin: any;

  constructor() {
    this.bodyContentBulletin = '';
    this.dataBulletin = {
      accountId: '',
      senderUserId: '',
      body: '',
      commentsCounter: '',
      comments: []
    };
    this.dataBulletin = [];
  }

  ngOnInit(): void {

  }

  public addNewBulletin(): void {
    this.dataBulletin.push({
      accountId: '',
      body: this.bodyContentBulletin,
      date: Math.floor(Math.random() * 10),
      commentsCounter: '',
      comments: [
        {
          content: 'Hi'
        },
        {
          content: 'How dou you do?'
        },
        {
          content: 'Hello'
        }
      ]
    });
    this.bodyContentBulletin = '';
  }
}
