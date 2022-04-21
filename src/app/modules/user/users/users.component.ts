import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user/user.http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public user: User;
  public title: string;
  public listUsers: any[];
  public isNewUser: boolean;
  public isUpdateUser: boolean;
  public idUpdate: Number;
  constructor(public router: Router, public serviceUser: UserHttpService) {
    this.title = '';
    this.listUsers = [];
    this.isNewUser = false;
    this.isUpdateUser = false;
    this.idUpdate = 0;
    this.user = {
      accountid: 0,
      firstName: '',
      lastName: '',
      createdDate: '',
      isDeleted: false,
    };
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() { }

  ngOnDestroy() { }

  getUsers(): void {
    this.serviceUser.getUser().subscribe(
      (data) => {
        this.listUsers = data;
      },
      (err) => {
        alert(`Ocurrio un error al obtener los usuarios: ${err}`);
      },
    )
  }
  newUser(): void {
    this.isNewUser = true;
    this.isUpdateUser = false;
  }
  cancelNewUser(): void {
    this.isNewUser = false;
    this.isUpdateUser = false;
    this.user.accountid = 0;
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.createdDate = '';
    this.idUpdate = 0;
  }
  saveNewUser(): void {
    this.serviceUser.saveUser(this.user).subscribe(
      (data) => {
        this.cancelNewUser();
        this.getUsers();
      },
      (err) => {
        alert(`Ocurrio un error al guardar los usuarios: ${err}`);
      },
    )
  }
  editData(user: any): void {
    this.user.accountid = user.accountid;
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.createdDate = user.createdDate;
    this.idUpdate = user.id;
    this.isNewUser = true;
    this.isUpdateUser = true;
  }
  saveEditData(): void {
    this.serviceUser.updateUser(this.idUpdate, this.user).subscribe(
      (data) => {
        this.cancelNewUser();
        this.getUsers();
      },
      (err) => {
        alert(`Ocurrio un error al editar el usurio: ${err}`);
      },
    )
  }

  deleteData(id: Number): void {
    this.serviceUser.deleteUser(id).subscribe(
      (data) => {
        console.log('DATA', data)
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }

  bulletin(): void {
    this.router.navigate(['/list-bulletin'])
  }
}
interface User {
  accountid: Number;
  firstName: string;
  lastName: string;
  createdDate: string;
  isDeleted: boolean;
}