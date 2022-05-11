// import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs';
// import { tap, delay } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   isLoggedIn = false;
//   // redirectUrl: string;

//   login(): Observable<boolean> {
//     return of(true).pipe(
//       delay(1000),
//       tap(val => this.isLoggedIn = true)
//     );
//   }

//   logout(): void {
//     this.isLoggedIn = false;
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    const token = sessionStorage.getItem('auth-token');
    // get token from local storage

    return token ? true : false;
  }
}
