import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpPostService } from '../../../services/httpPost.service';
import { AboutModel } from '../../../models/about.model';

@Component({
  selector: 'app-admin-edit-aim',
  templateUrl: './admin-edit-aim.component.html',
  styleUrls: ['./admin-edit-aim.component.css']
})
export class AdminEditAimComponent implements OnInit {

  form: FormGroup;

  about: AboutModel;

  loading: boolean = true;

  constructor(private httpPostService: HttpPostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      aim: new FormControl(null, {
        validators: [Validators.required]
      })
    });
    const data = { api : "getAbout", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
     this.about = val;
     this.form.patchValue({ aim: this.about.aim});
     this.loading = false;
    },
    (error) => {
      
    });
    
  }

  saveAim() {
    if(this.form.valid) {
      this.loading = true;
      this.about.aim = this.form.value.aim;
      const data = { api : "editAbout", data : this.about }
      this.httpPostService.httpPost(data).subscribe((val) => {
       this.form.reset();
       this.cancel();
      },
      (error) => {
       this.loading = false;
      });
    }
  }
  
  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'about', 'aim'], {relativeTo: this.route, skipLocationChange:true});
  }
}