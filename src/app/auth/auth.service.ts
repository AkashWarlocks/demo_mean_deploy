import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponseData {
  _id: string;
  email: string;
  userType: string,
  token: string;
  expiresIn: string;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;


  get isLoggedIn() {
    return this.user.asObservable();
  }

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {}


              
  login(email: string, password: string) {
    const data = { email, password };
    return this.http
      .post<AuthResponseData>('/login', data)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData._id,
            resData.userType,
            resData.token,
            +resData.expiresIn
          );
        })
      );

    // this.httpPostService.httpPost(data).subscribe((response: any)=>{
    //   console.log(response);
    //   const user = response.user;
    //   const userType = user.userType;
    //   localStorage.setItem('user', JSON.stringify(user));
    //   localStorage.setItem('access_token', JSON.stringify(response.token));

    //   if(email === "admin" && password === "admin") {
    //   // if(user.userType === "admin") {
    //     this.loggedIn.next({user: 'admin', loginValidate: true});
    //     this.router.navigate(['/admin'], {relativeTo: this.route});
    //   }
    //   else if(email === "student" && password === "student") {
    //   // else if(user.userType === "student") {
    //     this.loggedIn.next({user: 'student', loginValidate: true});
    //     this.router.navigate(['/student'], {relativeTo: this.route});
    //     // this.router.navigate(['/student'], {relativeTo: this.route, queryParams: {id : user._id}});
    //   }
    //   else if(email === "faculty" && password === "faculty") {
    //   // else if(user.userType === "faculty") {
    //     this.loggedIn.next({user: 'faculty', loginValidate: true});
    //     this.router.navigate(['/faculty'], {relativeTo: this.route});
    //     // this.router.navigate(['/faculty'], {relativeTo: this.route, queryParams: {id : user._id}});
    //   }
    //   else {
    //     this.loggedIn.next({user: null, loginValidate: false});
    //     this.router.navigate(['/login'], {relativeTo: this.route, queryParams: { status: 'false'}, skipLocationChange: true});  
    //   }

    // },(error)=>{
    //   this.loggedIn.next({user: null, loginValidate: false});
    //   this.router.navigate(['/login'], {relativeTo: this.route, queryParams: { status: 'false'}, skipLocationChange: true});
    // });
  }

  
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      userType: string,
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    console.log(userData)
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData.userType,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    
    let token = "";
    if(localStorage.getItem('userData')) {
      token = 'Bearer '+JSON.parse(localStorage.getItem('userData'))._token;
    }
    console.log(token)
    const headers = new HttpHeaders().set('Authorization', token);
    console.log(headers)

    return this.http.post("/logout", {}, { headers })
    .subscribe(
      resData => {
        console.log(resData);
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  logoutAll() {
    
    let token = "";
    if(localStorage.getItem('userData')) {
      token = 'Bearer '+JSON.parse(localStorage.getItem('userData'))._token;
    }
    console.log(token)
    const headers = new HttpHeaders().set('Authorization', token);
    console.log(headers)

    return this.http.post("http://127.0.0.1:3000/logoutAll", {}, { headers })
    .subscribe(
      resData => {
        console.log(resData);
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    userType: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, userType, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    console.log(errorRes);
    if(errorRes.error) {
      errorMessage = errorRes.error;
    }
    return throwError(errorMessage);
  }

  // autoLogin() {
  //   const user = JSON.parse(localStorage.getItem('user'));
    
  //   if (!user) {
  //     return;
  //   }
  //     const expirationDuration = new Date(user.tokenExpirationDate).getTime() - new Date().getTime();
  //     this.autoLogout(expirationDuration);
  // }

  // logout() {
  //   this.loggedIn.next({user: null, loginValidate: false});
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('access_token');
  //   if (this.tokenExpirationTimer) {
  //     clearTimeout(this.tokenExpirationTimer);
  //   }
  //   this.tokenExpirationTimer = null;
  //   this.router.navigate([''], {relativeTo: this.route});
  // }

  // autoLogout(expirationDuration: number) {
  //   this.tokenExpirationTimer = setTimeout(() => {
  //     this.logout();
  //   }, expirationDuration);
  // }
}