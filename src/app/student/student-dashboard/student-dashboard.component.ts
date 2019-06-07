import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../models/student.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Branch, BatchModel } from '../../models/branch.model';
import { HttpPostService } from '../../services/httpPost.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student: StudentModel;

  loading : boolean = true;

  branch : Branch;

  batch: BatchModel;

  constructor(private httpPostService: HttpPostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.
    subscribe(
      (params: Params) => {
        const _id = params["id"];
        const studentData = { api : "getStudent", data : { _id }}
        this.httpPostService.httpPost(studentData).subscribe((val) => {
         this.student = val[0];
         const branchData = { api : "getBranch", data : { _id : this.student.branch }}
         this.httpPostService.httpPost(branchData).subscribe((val) => {
           this.branch = val[0];
           this.loading = false;
         },
         (error) => {
         });
        },
        (error) => {
        }); 
      }
    );
  }

  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'student'], {relativeTo: this.route, skipLocationChange:true});
  }
}