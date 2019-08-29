import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  loginAuth: boolean = true;

  loading : boolean = true;

  constructor(private authService: AuthService,
              private roure: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {

    this.roure.queryParams
    .subscribe((params: Params) => {
      if(params.status == 'false') {
        this.loginAuth = false;
      }
    });

    this.form = new FormGroup({
      username : new FormControl(null, {
        validators:[Validators.required]
      }),
      password : new FormControl(null, {
        validators:[Validators.required]
      })
    });

    this.loading = false;
  }

  login() {
    if(this.form.invalid) {
      return  this.loginAuth = false;
    }

    if(this.form.valid) {
      this.loginAuth = true;
      this.authService.login(this.form.value.username, this.form.value.password);
    }
  }

  alertDismiss() {
    this.loginAuth = true;
  }

}