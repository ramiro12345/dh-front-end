import { Component, OnInit } from '@angular/core'
import { UserHttpService } from 'src/app/services/user/user.http.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public user: any
  public title: string
  public listUsers: any
  public isNewUser: boolean
  public isUpdateUser: boolean
  public idUpdate: Number
  constructor(public router: Router, public serviceUser: UserHttpService) {
    this.title = ''
    this.isNewUser = false
    this.isUpdateUser = false
    this.idUpdate = 0
    this.user = {
      accountid: '',
      firstName: '',
      lastName: '',
      createdDate: '',
      isDeleted: false,
    }
  }

  ngOnInit(): void {
    this.getUsers()
  }
  ngAfterViewInit() {
    console.log('After init')
  }
  ngOnDestroy() {}
  getUsers() {
    this.serviceUser.getUser().subscribe(
      (data) => {
        this.listUsers = data
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }
  newUser() {
    this.isNewUser = true
    this.isUpdateUser = false
  }
  cancelNewUser() {
    this.isNewUser = false
    this.isUpdateUser = false
    this.user.accountid = ''
    this.user.firstName = ''
    this.user.lastName = ''
    this.user.createdDate = ''
    this.idUpdate = 0
  }
  saveNewUser() {
    this.serviceUser.saveUser(this.user).subscribe(
      (data) => {
        console.log('DATA', data)
        this.cancelNewUser()
        this.getUsers()
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }
  editData(user: any) {
    this.user.accountid = user.accountid
    this.user.firstName = user.firstName
    this.user.lastName = user.lastName
    this.user.createdDate = user.createdDate
    this.idUpdate = user.id
    this.isNewUser = true
    this.isUpdateUser = true
  }
  saveEditData() {
    this.serviceUser.updateUser(this.idUpdate, this.user).subscribe(
      (data) => {
        console.log('DATA', data)
        this.cancelNewUser()
        this.getUsers()
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }
  deleteData(id: Number) {
    console.log('Deleete', id)
    this.serviceUser.deleteUser(id).subscribe(
      (data) => {
        console.log('DATA', data)
      },
      (err) => {
        console.log('Error', err)
      },
    )
  }
  bulletin() {
    this.router.navigate(['/list-bulletin']);
  }
}
