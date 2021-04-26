import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import User from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserServiceService) { }

  user;
  editUserForm: FormGroup
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params;
      this.editUserForm = new FormGroup({
        firstname: new FormControl(this.user.firstname, Validators.required),
        lastname: new FormControl(this.user.lastname, Validators.required),
        active: new FormControl(this.user.active == 'true', Validators.required),
        loggedIn: new FormControl(this.user.loggedIn == 'true', Validators.required)
      });
    });
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      //send to the edit
      console.log(this.editUserForm.controls['active'].value);
      this.userService.update({
        firstname: this.editUserForm.controls['firstname'].value,
        lastname: this.editUserForm.controls['lastname'].value,
        active: this.editUserForm.controls['active'].value,
        loggedIn: this.editUserForm.controls['loggedIn'].value,
        username: this.user.username
      }).subscribe(
        response => console.log(response)
      );
    }
  }
}
