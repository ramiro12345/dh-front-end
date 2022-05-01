export class Comment {
  id: number;
  accountId: string;
  content: string;
  repliesCounter: string;
  createdDate: string;
  isDeleted: boolean;
  private readonly _EMPTY: string = '';
  constructor() {
    this.id = 0;
    this.accountId = this._EMPTY;
    this.content = this._EMPTY;
    this.repliesCounter = this._EMPTY;
    this.createdDate = this._EMPTY;
    this.isDeleted = false;
  }
}
