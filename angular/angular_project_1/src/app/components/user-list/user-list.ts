import { Component } from '@angular/core';
import users from './user_data';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = users;
}
