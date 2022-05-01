import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserHttpService} from 'src/app/services/user/user.http.service';
import {User} from '../../../api/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  public users: Array<User>;
  public sedUser : User;
  public title: string;
  public isNewUser: boolean;
  public isUpdateUser: boolean;
  public idUpdate: number;

  constructor(private _serviceUser: UserHttpService,
              private _cdr: ChangeDetectorRef,
              public router: Router) {
    this._cdr.detach();
    this.title = '';
    this.users = [];
    this.isNewUser = false;
    this.isUpdateUser = false;
    this.idUpdate = 0;
    this.users = [{
      id: 0,
      accountId: '',
      firstName: '',
      lastName: '',
      createdDate: '',
      isDeleted: false
    }];
    this.sedUser = {
      id: 0,
      accountId: '',
      firstName: '',
      lastName: '',
      createdDate: '',
      isDeleted: false
    };
  }

  ngOnInit(): void {
    this._getUsers();
  }

  private _getUsers(): void {
    this._serviceUser.getUser().subscribe(
      (data) => {
        this.users = data;
        this._cdr.detectChanges();
      },
      (err) => {
        alert(`Error usurers: ${err}`);
      }
    );
  }

  public newUser(): void {
    this.isNewUser = true;
    this.isUpdateUser = false;
    this._cdr.detectChanges();
  }

  public cancelNewUser(): void {
    this.isNewUser = false;
    this.isUpdateUser = false;
    this.sedUser.accountId = '';
    this.sedUser.firstName = '';
    this.sedUser.lastName = '';
    this.sedUser.createdDate = '';
    this.idUpdate = 0;
    this._cdr.detectChanges();
  }

  public saveNewUser(): void {
    this._serviceUser.saveUser(this.sedUser).subscribe(
      (data) => {
        this.cancelNewUser();
      },
      (err) => {
        console.warn(`Error users: ${err}`);
      }
    );
  }

  public editData(user: User): void {
    this.sedUser.accountId = user.accountId;
    this.sedUser.firstName = user.firstName;
    this.sedUser.lastName = user.lastName;
    this.sedUser.createdDate = user.createdDate;
    this.idUpdate = user.id;
    this.isNewUser = true;
    this.isUpdateUser = true;
    this._cdr.detectChanges();
  }

  public saveEditData(): void {
    this._serviceUser.updateUser(this.idUpdate, this.sedUser).subscribe(
      (data) => {
        this.cancelNewUser();
      },
      (err) => {
        console.warn(`Error users, edit: ${err}`);
      }
    );
  }

  public deleteData(id: number): void {
    this._serviceUser.deleteUser(id).subscribe(
      (data) => {
        alert(`users, deleted`);
      },
      (err) => {
        console.warn(`Error users, deleted: ${err}`);
      }
    );
  }

  public bulletin(): void {
    this.router.navigate(['/list-bulletin']);
  }
}
