import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpPostService } from '../../../services/httpPost.service';

@Component({
  selector: 'app-admin-edit-philosophy',
  templateUrl: './admin-edit-philosophy.component.html',
  styleUrls: ['./admin-edit-philosophy.component.css']
})
export class AdminEditPhilosophyComponent implements OnInit {

  form: FormGroup;

  philosophy: string;

  loading: boolean = true;

  constructor(private httpPostService: HttpPostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      philosophy: new FormControl(this.philosophy, {
        validators: [Validators.required]
      })
    });

    const data = { api : "getAbout", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
      this.philosophy = val.philosophy;
      this.form.patchValue({philosophy: this.philosophy});
      this.loading = false;
    },
    (error) => {
    });

  }

  savePhilisophy() {
    if(this.form.valid) {
      this.loading = true;
      const data = { api : "savePhillosophy", data : { philosophy : this.form.value.philosophy }}
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
    this.router.navigate(['/admin', 'about', 'philosophy'], {relativeTo: this.route, skipLocationChange:true});
  }

}
