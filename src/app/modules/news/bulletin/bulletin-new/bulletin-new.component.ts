import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input, ViewEncapsulation, ChangeDetectorRef
} from '@angular/core';
import {Bulletin} from '../../../../api/bulletin';
import {Comment} from '../../../../api/comment';
import {CommentsModel} from '../../../../models/comments.model';

@Component({
  selector: 'app-bulletin-new',
  templateUrl: './bulletin-new.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletinNewComponent implements OnInit {
  @Input('dataNotice') dataBulletin: any;

  public listBulletins: Array<Bulletin>;
  public newComment: string;

  public _commentCreated: Comment;

  constructor(private _commentsModel: CommentsModel,
              private _cdr: ChangeDetectorRef) {
    this.listBulletins = [];
    this.newComment = '';
    this._commentCreated = new Comment();
  }

  ngOnInit(): void {
    this._initialize();
  }

  ngAfterViewInit() {
    this.listBulletins.forEach((bulletin: Bulletin) => {
      (<HTMLInputElement>document.getElementById(`bulletin-new-footer-buttons-less${bulletin.id}`)).style.display = 'none';
      (<HTMLInputElement>document.getElementById(`bulletin-new-section-comments${bulletin.id}`)).style.display = 'none';
    });
  }

  public addComment(bulletin: Bulletin): void {
    console.log('add, comment', bulletin);
    this._commentCreated.content = this.newComment;
    this._commentsModel.setComment(bulletin.id, this._commentCreated);
    this.newComment = '';
    this._cdr.detectChanges();
  }

  private _listCommentModel(): void {
    this._commentsModel.asObservable().subscribe((values: Map<number, Comment[]>) => {
      this._cdr.detectChanges();
      /*if (!!values.length) {
        this.dataBulletins = values;
        console.log("SUBSCRIBE", this.dataBulletins);
        this._cdr.detectChanges();
      }*/
    });
  }

  public viewComments(id: number, type: string): void {
    if (type === 'plus') {
      (<HTMLInputElement>document.getElementById(`bulletin-new-section-comments${id}`)).style.display = 'block';
      (<HTMLInputElement>document.getElementById(`bulletin-new-footer-buttons-plus${id}`)).style.display = 'none';
      (<HTMLInputElement>document.getElementById(`bulletin-new-footer-buttons-less${id}`)).style.display = 'block';
      this._cdr.detectChanges();
    } else {
      (<HTMLInputElement>document.getElementById(`bulletin-new-section-comments${id}`)).style.display = 'none';
      (<HTMLInputElement>document.getElementById(`bulletin-new-footer-buttons-plus${id}`)).style.display = 'block';
      (<HTMLInputElement>document.getElementById(`bulletin-new-footer-buttons-less${id}`)).style.display = 'none';
      this._cdr.detectChanges();
    }
  }

  private _initialize(): void {
    this.listBulletins = this.dataBulletin;
    this._listCommentModel();

    console.log(this.listBulletins);
  }
}
