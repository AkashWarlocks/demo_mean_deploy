import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((login: {user: string, loginValidate: boolean}) => {
        if (!login.loginValidate && (login.user !== 'admin')) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

@Injectable()
export class StudentAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((login: {user: string, loginValidate: boolean}) => {
        if (!login.loginValidate && (login.user !== 'student')) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

@Injectable()
export class FacultuAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((login: {user: string, loginValidate: boolean}) => {
        if (!login.loginValidate && (login.user !== 'faculty')) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

@Injectable()
export class LoginAuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isLoggedIn.pipe(
        take(1),
        map((login: {user: string, loginValidate: boolean}) => {
          if (login.loginValidate && login.user) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        })
      );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
  }