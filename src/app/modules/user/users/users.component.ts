import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserHttpService} from 'src/app/services/user/user.http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public user: User;
  public title: string;
  public listUsers: any[];
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
      accountId: 0,
      firstName: '',
      lastName: '',
      createdDate: '',
      isDeleted: false
    };
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  public getUsers(): void {
    this.serviceUser.getUser().subscribe(
      (data) => {
        this.listUsers = data;
      },
      (err) => {
        alert(`Ocurrio un error al obtener los usurers: ${err}`);
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
    this.user.accountId = 0;
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
        alert(`Ocurrio un error al guardar los usuarios: ${err}`);
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
        alert(`Occurred un error al edit el usurer: ${err}`);
      }
    );
  }

  public deleteData(id: number): void {
    this.serviceUser.deleteUser(id).subscribe(
      (data) => {
        console.log('DATA', data);
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }

  public bulletin(): void {
    this.router.navigate(['/list-bulletin']).then(r => console.log(r));
  }
}

interface User {
  id: number;
  accountId: number;
  firstName: string;
  lastName: string;
  createdDate: string;
  isDeleted: boolean;
}
