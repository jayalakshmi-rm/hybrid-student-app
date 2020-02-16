import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from '../services/user.services';
class UserModel {
  username: string;
  password: string;
  userType: string;

  constructor() {
    this.userType = 'admin';
  }
}
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  userObj: UserModel = new UserModel();

  constructor(private router: Router, private userService: UserServices) { }

  loginHandler() {
    console.log('userObj', this.userObj);
    this.userService.setUserData(this.userObj);
    if(this.userObj.userType == 'admin'){
    this.router.navigate(['/student']);
    } else {
      this.router.navigate(['/student/details/'+this.userObj.username]);
    }
  }
}
