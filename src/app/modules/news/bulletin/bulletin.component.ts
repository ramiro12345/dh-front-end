import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletinComponent implements OnInit {
  public bodyContentBulletin: string;
  public dataBulletin: any;

  constructor(private _cdr: ChangeDetectorRef) {
    this.bodyContentBulletin = '';
    this.dataBulletin = [];
  }

  ngOnInit(): void {
    this._getBulletins();
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
    console.log(this.dataBulletin);
    this.bodyContentBulletin = '';
  }

  private _getBulletins(): void {

  }
}
