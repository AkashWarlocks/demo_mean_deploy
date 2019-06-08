import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpPostService } from '../../../services/httpPost.service';

@Component({
  selector: 'app-admin-edit-history',
  templateUrl: './admin-edit-history.component.html',
  styleUrls: ['./admin-edit-history.component.css']
})
export class AdminEditHistoryComponent implements OnInit {

  form: FormGroup;

  history: string;

  loading: boolean = true;

  constructor(private httpPostService: HttpPostService,
    private router: Router,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    this.form = new FormGroup({
      history: new FormControl(this.history, {
        validators: [Validators.required]
      })
    });

    const data = { api : "getAbout", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
     this.history = val.history;
     this.form.patchValue({history: this.history});
     this.loading = false;
    },
    (error) => {
    });
  }

  saveHistory() {
    if(this.form.valid) {
      this.loading = true;
      const data = { api : "saveHistory", data : { history : this.form.value.history }}
      this.httpPostService.httpPost(data).subscribe((val) => {
       this.form.reset();
       this.cancel();
      },
      (error) => {
       this.loading = true;
      });

    }
  }
  
  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'about', 'history'], {relativeTo: this.route, skipLocationChange:true});
  }

}
