import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BulletinsModel} from '../../../models/bulletins.model';
import {CommentsModel} from '../../../models/comments.model';
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

  private readonly _EMPTY: string = '';

  constructor(private _serviceBulletin: BulletinHttpService,
              private _bulletinsModel: BulletinsModel,
              private _commentsModel: CommentsModel,
              private _cdr: ChangeDetectorRef) {
    this._cdr.detach();
    this.bodyContentBulletin = this._EMPTY;
    this.sendBulletin = new Bulletin(0, this._EMPTY, 0, this._EMPTY, this._EMPTY, false, 0, []);
    this.dataBulletins = new Array<Bulletin>();
  }

  ngOnInit(): void {
    this._getBulletins();
    this._listBulletinModel();
  }

  public addNewBulletin(): void {
    this.sendBulletin = new Bulletin(1, '8585858', 100021, this.bodyContentBulletin, '2022-04-17', false, Math.floor(Math.random() * 100), []);
    this._serviceBulletin.saveBulletin(this.sendBulletin).subscribe(
      (data: Bulletin) => {
        data = Object.assign(data, {comment: [{content: 'First Comment'}, {content: 'Second Comment'}]});
        this._bulletinsModel.setBulletin(data);
        this._commentsModel.setCommentByBulletin(data.id, data);
        (<HTMLInputElement>document.getElementById(`bulletin-new-footer-buttons-less${data.id}`)).style.display = 'none';
        (<HTMLInputElement>document.getElementById(`bulletin-new-section-comments${data.id}`)).style.display = 'none';
        this._cdr.detectChanges();
      },
      (err) => {
        console.warn(`Error users: ${err}`);
      }
    );
  }

  private _listBulletinModel(): void {
    this._bulletinsModel.asObservable().subscribe((values: Bulletin[]) => {
      if (!!values.length) {
        this.dataBulletins = values;
        console.log('SUBSCRIBE', this.dataBulletins);
        this._cdr.detectChanges();
      }
    });
  }

  private _getBulletins(): void {
    this._serviceBulletin.getBulletins().subscribe(
      (data: Array<Bulletin>) => {
        this.dataBulletins = data;
        this.dataBulletins.forEach(element => {
          Object.assign(element, {comment: [{content: 'First Comment'}, {content: 'Second Comment'}]});
        });

        this._bulletinsModel.setBulletins(this.dataBulletins);
        this._commentsModel.setComments(this.dataBulletins);
        this._cdr.detectChanges();
      },
      (err) => {
        console.warn(`Error usurers: ${err}`);
      }
    );
  }
}
