import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  createUserForm;
  message: string;
  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.createUserForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      this.userService.save(this.createUserForm.value).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }
}
