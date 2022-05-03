import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AccessGuard} from 'src/app/guards/access.guard';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent implements OnInit {
  public isViewPassword: boolean;
  public userId: string;
  public userPassword: string;

  constructor(private _cdr: ChangeDetectorRef,
              public guard: AccessGuard,
              private _router: Router) {
    this.userId = '';
    this.userPassword = '';
    this.isViewPassword = false;
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.userId != '' && this.userPassword != '') {
      this.guard.login(true);
      this._router.navigate(['/list-users']);
    } else
      this._router.navigate(['/login']);
  }

  public viewPassword(): void {
    if (this.isViewPassword)
      this.isViewPassword = false;
    else
      this.isViewPassword = true;
    this._cdr.detectChanges();
  }
}
