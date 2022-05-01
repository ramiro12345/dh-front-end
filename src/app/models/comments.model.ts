import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Bulletin} from '../api/bulletin';
import {Comment} from '../api/comment';

@Injectable()
export class CommentsModel extends BehaviorSubject<Map<number, Comment[]>> {
  private commentById: Comment[] | undefined;
  private _commentsByBulletinId: Map<number, Comment[]>;

  constructor() {
    super(new Map<number, Comment[]>());
    this.commentById = [];
    this._commentsByBulletinId = new Map<number, Comment[]>();
  }

  public setComments(data: Array<Bulletin>): void {
    this._commentsByBulletinId = new Map<number, Comment[]>();

    data.forEach((value: Bulletin) => {
      this._commentsByBulletinId.set(value.id, value.comment);
    });

    this.next(this._commentsByBulletinId);
  }

  public setComment(bulletinId: number, data: Comment): void {
    this.commentById = this._commentsByBulletinId.get(bulletinId);

    if (this.commentById) {
      this.commentById.push(data);
      this._commentsByBulletinId.set(bulletinId, this.commentById);
      this.next(this._commentsByBulletinId);
    }
  }

  public setCommentByBulletin(bulletinId: number, data: Bulletin): void {
    this.commentById = this._commentsByBulletinId.get(bulletinId);

    if (this.commentById) {
      this.commentById.push(...data.comment);
      this._commentsByBulletinId.set(bulletinId, this.commentById);
      this.next(this._commentsByBulletinId);
    } else {
      this._commentsByBulletinId.set(bulletinId, data.comment);
      this.next(this._commentsByBulletinId);
    }
  }
}
