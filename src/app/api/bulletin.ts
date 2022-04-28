export interface Bulletin {
  id?: number;
  accountId: string;
  senderUserId: number;
  body: string;
  createdDate: string;
  isDeleted: boolean;
  commentsCounter: number;
}
