import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormValidator } from '../../../validators/form.validator';
import { HttpPostService } from '../../../services/httpPost.service';

@Component({
  selector: 'app-admin-add-exam',
  templateUrl: './admin-add-exam.component.html',
  styleUrls: ['./admin-add-exam.component.css']
})
export class AdminAddExamComponent implements OnInit {
  
  form: FormGroup;

  loading : boolean = true;

  formError: boolean = false;

  constructor(private httpPostService: HttpPostService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      body: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.loading = false;
  }

  addExam() {
    if(this.form.invalid) {
      this.formError = true;
    }

    if(this.form.valid) {
      this.formError = false;
      this.loading = true;
      const exam = { title: this.form.value.title, body : this.form.value.body}
      const data = { api : "addExam", data : exam }
      this.httpPostService.httpPostAuth(data).subscribe((val) => {
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
    this.router.navigate(["/admin", "exam"], {relativeTo: this.route, skipLocationChange:true});        
  }
}