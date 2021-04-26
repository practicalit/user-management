import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router) { }

  users: Array<User>
  ngOnInit() {
    this.userService.list().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  redirect(user: User) {
    this.router.navigate(['/edit-user', user]);
  }

}
