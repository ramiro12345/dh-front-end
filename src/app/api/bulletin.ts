import {Comment} from './comment';

export class Bulletin {
  id: number;
  accountId: string;
  senderUserId: number;
  body: string;
  createdDate: string;
  isDeleted: boolean;
  commentsCounter: number;
  comment: Comment [];

  constructor(id: number, accountId: string, senderUserId: number, body: string, createdDate: string, isDeleted: boolean, commentsCounter: number, comment: Comment[]) {
    this.id = id;
    this.accountId = accountId;
    this.senderUserId = senderUserId;
    this.body = body;
    this.createdDate = createdDate;
    this.isDeleted = isDeleted;
    this.commentsCounter = commentsCounter;
    this.comment = comment;
  }
}
