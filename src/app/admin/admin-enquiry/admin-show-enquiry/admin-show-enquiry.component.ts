import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Enquiry } from '../../../models/enquiry.model';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-admin-show-enquiry',
  templateUrl: './admin-show-enquiry.component.html',
  styleUrls: ['./admin-show-enquiry.component.css']
})
export class AdminShowEnquiryComponent implements OnInit {

  enquiry: Enquiry;
  id : string;

  constructor(private enquiryService: EnquiryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.enquiry = this.enquiryService.getEnquiry(this.id);
      }
    );
  }

  cancel() {
    this.router.navigate(['/admin', 'enquiry'], {relativeTo: this.route, skipLocationChange: true});
  }

}