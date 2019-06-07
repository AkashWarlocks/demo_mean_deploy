import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  user: string;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((value) => {
      this.user = value.user;
      this.isLoggedIn = value.loginValidate;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  goToHome() {
    if(this.user === 'admin') {
      this.router.navigate(['/admin/dashboard'], {relativeTo: this.route});
    }
    else if(this.user === 'faculty') {
      this.router.navigate(['/faculty'], {relativeTo: this.route});
    }
    else if(this.user === 'student') {
      this.router.navigate(['/student/dashboard'], { relativeTo: this.route, queryParamsHandling: "preserve" });
    }
    else {
      this.router.navigate(['/'], {relativeTo: this.route});
    }
  }
}