export class Comment {
  id: number;
  accountId: string;
  content: string;
  repliesCounter: string;
  createdDate: string;
  isDeleted: boolean;

  constructor(id: number, accountId: string, content: string, repliesCounter: string, createdDate: string, isDeleted: boolean) {
    this.id = id;
    this.accountId = accountId;
    this.content = content;
    this.repliesCounter = repliesCounter;
    this.createdDate = createdDate;
    this.isDeleted = isDeleted;
  }
}
