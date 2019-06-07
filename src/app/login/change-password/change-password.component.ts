import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HttpPostService } from '../../services/httpPost.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  loading : boolean = true;

  user: string;

  constructor(private httpPostService: HttpPostService,
              private authService: AuthService,
              private roure: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      currentPassword : new FormControl(null, {
        validators:[Validators.required]
      }),
      newPassword : new FormControl(null, {
        validators:[Validators.required]
      }),
      confirmPassword : new FormControl(null, {
        validators:[Validators.required]
      })
    });

    this.user = "";

    this.loading = false;
  }

  changePassword() {

    if(this.form.valid) {
      this.loading = true;

      const changedPassword = {
        user : this.user,
        password : this.form.value.password,
        newPassword : this.form.value.newPassword
      }

      const data = { api : "changePassword", data : changedPassword }
      this.httpPostService.httpPost(data).subscribe((val) => {
       this.loading = false;
      },
      (error) => {
       this.loading = false;
      });
    }
  }
}