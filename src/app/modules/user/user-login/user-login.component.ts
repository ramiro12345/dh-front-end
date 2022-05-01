import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AccessGuard} from 'src/app/guards/access.guard';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent implements OnInit {
  public userId: string;
  public userPassword: string ;

  constructor(public router: Router, public guard: AccessGuard) {
    this.userId = '';
    this.userPassword = '';
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.userId != '' && this.userPassword != '') {
      this.guard.login(true);
      this.router.navigate(['/list-users']);
    } else
      this.router.navigate(['/login']);
  }
}
