import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input, ViewEncapsulation
} from '@angular/core';
import {Bulletin} from '../../../../api/bulletin';
import {Comment} from '../../../../api/comment';
import {CommentsModel} from '../../../../models/comments.model';

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BulletinNewComponent implements OnInit {
  @Input('dataNotice') dataBulletin: any;

  public listBulletins: Array<Bulletin>;
  public newComment: string;

  public _commentCreated: Comment;

  constructor(private _commentsModel: CommentsModel) {
    this.listBulletins = [];
    this.newComment = '';
    this._commentCreated = new Comment();
  }

  ngOnInit(): void {
    this._initialize();
  }

  public addComment(bulletin: Bulletin): void {

    this._commentCreated.content = this.newComment;
    this._commentsModel.setComment(bulletin.id, this._commentCreated);
  }

  private _initialize(): void {
    this.listBulletins = this.dataBulletin;
    console.log(this.listBulletins);
  }
}
