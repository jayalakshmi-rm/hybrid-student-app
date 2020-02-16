import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServices } from 'src/app/services/user.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  userObj = {};
  constructor(private activatedRoute: ActivatedRoute, private userService: UserServices) { }

  ngOnInit() {
    this.userObj = this.userService.getUserData();
    this.activatedRoute.params.subscribe(params => {           
      console.log(params['rollNumber']);
   });
  }
}
