import { Component, Host, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/appServices/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersForm!: FormGroup;
  users: User[] = [];
  editMode: boolean = false;
  editId!: number;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.buildForm();
    this.fetchUsersData();
  }

  buildForm() {
    this.usersForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      technology: new FormControl(null, Validators.required),
    });
  }

  onAddUser() {
    if (!this.usersForm.valid) {
      return;
    }
    if (this.editMode) {
      this._userService.updateUser(this.editId, this.usersForm.value).subscribe((res) => {
        this.fetchUsersData();
        this.usersForm.reset();
        this.editMode = false;
      })
    }else {
      this._userService.addUser(this.usersForm.value).subscribe((res) => {
        console.log(res);
        this.fetchUsersData();
        this.usersForm.reset();
      });
    }

  }

  fetchUsersData() {
    this._userService.fetUsers().subscribe((res) => {
      let data = JSON.stringify(res);
      this.users = JSON.parse(data);
    });
  }

  deleteUserData(id: number) {
    if (confirm('Are you sure to delete this user?')) {
      this._userService.deleteUser(id).subscribe((res) => {
        this.fetchUsersData();
      });
    }
  }

  editUserData(id: number, index: number) {
    this.editMode = true;
    this.editId  = id;
    this.usersForm.setValue({
      name: this.users[index].name,
      technology: this.users[index].technology
    });
  }

  get f() {
    return this.usersForm.controls;
  }
}
