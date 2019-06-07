import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../models/enquiry.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpPostService } from '../../../services/httpPost.service';

@Component({
  selector: 'app-admin-reply-enquiry',
  templateUrl: './admin-reply-enquiry.component.html',
  styleUrls: ['./admin-reply-enquiry.component.css']
})
export class AdminReplyEnquiryComponent implements OnInit {

  form: FormGroup;

  loading : boolean = true;

  enquiry: Enquiry;

  constructor(private httpPostService: HttpPostService,
              private router: Router,
              private route: ActivatedRoute) { }

  id : string;

  ngOnInit() {
    
    this.form = new FormGroup({
      subject: new FormControl(null, {
        validators: [Validators.required]
      }),
      body: new FormControl(null, {
        validators: [Validators.required]
      })
    })

    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = params['id'];
        this.httpPostService.httpPost(this.id).subscribe((val) => {
         this.enquiry = val[0];
         this.loading = false;
        },
        (error) => {
        });
      }
    );
  }
  
  sendReply() {
    if(this.form.valid) {
      this.loading = true;
      const reply = { email : this.enquiry.email, subject : this.form.value.subject, body : this.form.value.body }
      const data = { api : "sendEnquiryReply", data : reply }
      this.httpPostService.httpPost(data).subscribe((val) => {
       this.form.reset();
       this.loading = false;
      },
      (error) => {
      this.loading = false;    
      });
    }
  }

  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'enquiry', this.id], {relativeTo:this.route, skipLocationChange: true});
  }
}