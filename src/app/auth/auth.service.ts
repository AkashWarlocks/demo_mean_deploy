import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpPostService } from '../services/httpPost.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<{user: string, loginValidate: boolean}> = new BehaviorSubject<{user: string, loginValidate: boolean}>({user: null, loginValidate: false});

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private httpPostService: HttpPostService,
              private router: Router,
              private route: ActivatedRoute) {}

  login(email: string, password: string) {
    const data = { api : "login", data : { email, password } }
    this.httpPostService.httpPost(data).subscribe((response: any)=>{
      console.log(response);
      const user = response.user;
      const userType = user.userType;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('access_token', JSON.stringify(response.token));

      // if(email === "admin" && password === "admin") {
      if(user.userType === "admin") {
        this.loggedIn.next({user: 'admin', loginValidate: true});
        this.router.navigate(['/admin'], {relativeTo: this.route});
      }
      // else if(email === "student" && password === "student") {
      else if(user.userType === "student") {
        this.loggedIn.next({user: 'student', loginValidate: true});
        this.router.navigate(['/student'], {relativeTo: this.route});
        // this.router.navigate(['/student'], {relativeTo: this.route, queryParams: {id : user._id}});
      }
      // else if(email === "faculty" && password === "faculty") {
      else if(user.userType === "faculty") {
        this.loggedIn.next({user: 'faculty', loginValidate: true});
        this.router.navigate(['/faculty'], {relativeTo: this.route});
        // this.router.navigate(['/faculty'], {relativeTo: this.route, queryParams: {id : user._id}});
      }
      else {
        this.loggedIn.next({user: null, loginValidate: false});
        this.router.navigate(['/login'], {relativeTo: this.route, queryParams: { status: 'false'}, skipLocationChange: true});  
      }

    },(error)=>{
      this.loggedIn.next({user: null, loginValidate: false});
      this.router.navigate(['/login'], {relativeTo: this.route, queryParams: { status: 'false'}, skipLocationChange: true});
    });
  }

  logout() {
    this.loggedIn.next({user: null, loginValidate: false});
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.router.navigate([''], {relativeTo: this.route});
  }
}