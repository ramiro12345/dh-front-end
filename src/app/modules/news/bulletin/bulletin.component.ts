import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BulletinHttpService} from '../../../services/bulletin/bulletin.http.service';
import {Bulletin} from '../../../api/bulletin';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletinComponent implements OnInit {
  public bodyContentBulletin: string;
  public dataBulletins: Array<Bulletin>;
  public sendBulletin: Bulletin;

  constructor(private _serviceBulletin: BulletinHttpService,
              private _cdr: ChangeDetectorRef) {
    this._cdr.detach();
    this.bodyContentBulletin = '';
    this.sendBulletin = {
      accountId: '',
      senderUserId: 0,
      body: '',
      createdDate: '',
      isDeleted: false,
      commentsCounter: 0
    };

    this.dataBulletins = [{
      id: 0,
      accountId: '',
      senderUserId: 0,
      body: '',
      createdDate: '',
      isDeleted: false,
      commentsCounter: 0
    }];
  }

  ngOnInit(): void {
    this._getBulletins();
  }

  public addNewBulletin(): void {
    this.sendBulletin = {
      accountId: '8585858',
      senderUserId: 100021,
      body: this.bodyContentBulletin,
      createdDate: '2022-04-17',
      isDeleted: false,
      commentsCounter: Math.floor(Math.random() * 100)
    };
    this._serviceBulletin.saveBulletin(this.sendBulletin).subscribe(
      (data: any) => {
        this.dataBulletins.push(data);

        this._cdr.detectChanges();
      },
      (err) => {
        alert(`Error users: ${err}`);
      }
    );
  }

  private _getBulletins(): void {
    this._serviceBulletin.getBulletins().subscribe(
      (data: any) => {
        this.dataBulletins = data;
        this._cdr.detectChanges();
      },
      (err) => {
        alert(`Error usurers: ${err}`);
      }
    );
  }
}
