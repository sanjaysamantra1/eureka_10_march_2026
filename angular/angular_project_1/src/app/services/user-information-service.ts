import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {
  // private userRole = 'trainer';
  userRole = 'student';

  getUserRole() {
    return this.userRole;
  }
}
