import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<{user: string, loginValidate: boolean}> = new BehaviorSubject<{user: string, loginValidate: boolean}>({user: null, loginValidate: false});

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  login(userName: string, password: string) {
    setTimeout(() => {
        if (userName === 'admin' && password === 'admin' ) {
            this.loggedIn.next({user: 'admin', loginValidate: true});
            this.router.navigate(['/admin'], {relativeTo: this.route});
        }
        else if (userName === 'student' && password === 'student' ) {
          this.loggedIn.next({user: 'student', loginValidate: true});
          // this.router.navigate(['/student'], {relativeTo: this.route});
        }
        else if (userName === 'faculty' && password === 'faculty' ) {
          this.loggedIn.next({user: 'faculty', loginValidate: true});
          // this.router.navigate(['/faculty'], {relativeTo: this.route});
        }
        else {
          this.loggedIn.next({user: null, loginValidate: false});
          this.router.navigate(['/login', 'false'], {relativeTo: this.route, skipLocationChange: true});
        }
    }, 500);
  }

  logout() {
    this.loggedIn.next({user: null, loginValidate: false});
    this.router.navigate(['/login']);
  }
}