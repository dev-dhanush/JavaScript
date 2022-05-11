// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      sessionStorage.removeItem('auth-user');
      sessionStorage.removeItem('auth-token');
      this.router.navigate(['/login']); // go to login if not authenticated
      return false;
    }
    return true;
  }
}
