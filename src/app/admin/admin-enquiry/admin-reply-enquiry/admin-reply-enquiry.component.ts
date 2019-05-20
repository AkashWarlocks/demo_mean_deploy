import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../models/enquiry.model';
import { EnquiryService } from '../../../services/enquiry.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-reply-enquiry',
  templateUrl: './admin-reply-enquiry.component.html',
  styleUrls: ['./admin-reply-enquiry.component.css']
})
export class AdminReplyEnquiryComponent implements OnInit {

  form: FormGroup;

  enquiry: Enquiry;

  constructor(private enquiryService: EnquiryService,
              private router: Router,
              private route: ActivatedRoute) { }

  id : string;

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        this.id = params['id'];
        this.enquiry = this.enquiryService.getEnquiry(this.id);
      }
    );

    this.form = new FormGroup({
      subject: new FormControl(null, {
        validators: [Validators.required]
      }),
      body: new FormControl(null, {
        validators: [Validators.required]
      })
    })
  }

  sendReply() {
    if(this.form.valid) {
      this.enquiryService.sendReply(this.enquiry.email, this.form.value.subject, this.form.value.body);
      this.form.reset();
    }
  }

  cancel() {
    this.router.navigate(['/admin', 'enquiry', this.id], {relativeTo:this.route, skipLocationChange: true});
  }
}