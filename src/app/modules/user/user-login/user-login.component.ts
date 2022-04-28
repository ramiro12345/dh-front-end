import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccessGuard} from 'src/app/guards/access.guard';

@Component({
  selector: 'app-user-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {
  public userLogin: any;

  constructor(public router: Router, public guard: AccessGuard) {
    this.userLogin = {
      accountId: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.userLogin.accountId != '' && this.userLogin.password != '') {
      this.guard.login(true);
      this.router.navigate(['/list-users']);
    } else
      this.router.navigate(['/login']);
  }
}
