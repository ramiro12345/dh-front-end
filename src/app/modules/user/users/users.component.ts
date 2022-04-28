import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserHttpService} from 'src/app/services/user/user.http.service';
import {User} from '../../../api/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.None
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  public user: User;
  public title: string;
  public listUsers: any;
  public isNewUser: boolean;
  public isUpdateUser: boolean;
  public idUpdate: number;

  constructor(public router: Router, public serviceUser: UserHttpService) {
    this.title = '';
    this.listUsers = [];
    this.isNewUser = false;
    this.isUpdateUser = false;
    this.idUpdate = 0;
    this.user = {
      id: 0,
      accountId: '',
      firstName: '',
      lastName: '',
      createdDate: '',
      isDeleted: false
    };
  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.serviceUser.getUser().subscribe(
      (data) => {
        this.listUsers = data;
      },
      (err) => {
        alert(`Error usurers: ${err}`);
      }
    );
  }

  public newUser(): void {
    this.isNewUser = true;
    this.isUpdateUser = false;
  }

  public cancelNewUser(): void {
    this.isNewUser = false;
    this.isUpdateUser = false;
    this.user.accountId = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.createdDate = '';
    this.idUpdate = 0;
  }

  public saveNewUser(): void {
    this.serviceUser.saveUser(this.user).subscribe(
      (data) => {
        this.cancelNewUser();
        this.getUsers();
      },
      (err) => {
        alert(`Error users: ${err}`);
      }
    );
  }

  public editData(user: User): void {
    this.user.accountId = user.accountId;
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.createdDate = user.createdDate;
    this.idUpdate = user.id;
    this.isNewUser = true;
    this.isUpdateUser = true;
  }

  public saveEditData(): void {
    this.serviceUser.updateUser(this.idUpdate, this.user).subscribe(
      (data) => {
        this.cancelNewUser();
        this.getUsers();
      },
      (err) => {
        alert(`Error users, edit: ${err}`);
      }
    );
  }

  public deleteData(id: number): void {
    this.serviceUser.deleteUser(id).subscribe(
      (data) => {
        alert(`users, deleted`);
      },
      (err) => {
        alert(`Error users, deleted: ${err}`);
      }
    );
  }

  public bulletin(): void {
    this.router.navigate(['/list-bulletin']);
  }
}
