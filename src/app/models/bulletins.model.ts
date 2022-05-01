import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Bulletin} from '../api/bulletin';

@Injectable()
export class BulletinsModel extends BehaviorSubject<Bulletin[]> {

  private _bulletins: Bulletin[];

  constructor() {
    super([]);
    this._bulletins = [];
  }

  public setBulletins(data: Array<Bulletin>): void {
    this._bulletins = data;
    this.next(this._bulletins);
  }

  public setBulletin(data: Bulletin): void {
    this._bulletins.push(data);
    this.next(this._bulletins);
  }

}
