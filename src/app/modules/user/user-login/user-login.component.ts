import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoGuard } from 'src/app/guards/acceso.guard';
import { UserHttpService } from 'src/app/services/user/user.http.service';
@Component({
  selector: 'app-user-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  public userLogin: any;
  constructor(public serviceUser: UserHttpService, public router: Router, public guard: AccesoGuard) {
    this.userLogin = {
      accountId: '',
      password: '',
    };
  }

  ngOnInit(): void { }
  
  submit(): void {
    if (this.userLogin.accountId != '' && this.userLogin.password != '') {
      this.guard.login(true);
      this.router.navigate(['/list-users']);
    } else {
      alert('ingrese sus datos');
      this.router.navigate(['/login']);
    }
  }
}
