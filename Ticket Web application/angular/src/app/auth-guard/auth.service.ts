import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    const token = sessionStorage.getItem('auth-token');
    const user = sessionStorage.getItem('auth-user');

    return token && user ? true : false;
  }
}
