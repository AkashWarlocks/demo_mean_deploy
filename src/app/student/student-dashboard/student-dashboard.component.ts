import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Branch, BatchModel } from '../../models/branch.model';
import { BranchService } from '../../services/branch.service';
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
              private studentService : StudentService,
              private branchService : BranchService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.
    subscribe(
      (params: Params) => {
        const _id = params["id"];
        // const studentData = { api : "/getStudent", data : { _id }}
        // this.httpPostService.httpPost(studentData).subscribe((val) => {
        //  this.student = val;
        //  const branchData = { api : "/getBranch", data : { _id : this.student.branch }}
        //  this.httpPostService.httpPost(branchData).subscribe((val) => {
        //    this.branch = val;
        //    this.loading = false;
        //  },
        //  (error) => {
        //  });
        // },
        // (error) => {
        // }); 

        this.student = this.studentService.getStudent(_id);
        this.branch = this.branchService.getBranch(this.student.branch);
        this.batch = this.branch.batch.find(batch => (batch.batchName === this.student.batchName && batch.batchType === this.student.batch));
        this.loading = false;
      }
    );
  }

  changeStatus(_id:string, status: string) {
    let statusConfirm: any = true;
    if(status === "deactivated") {
      statusConfirm = confirm("do you really want to Deactivate Branch??");
    }  
    if(statusConfirm) {
      this.loading = true;
      // const data = { api : "/changeStudentStatus", data : { _id, status }}
      // this.httpPostService.httpPost(data).subscribe((val) => {
      //  this.cancel();
      // },
      // (error) => {
      //  this.loading = false;
      // });
      
      this.studentService.changeStatus(_id, status);
      this.cancel();
    }
  }

  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'student'], {relativeTo: this.route, skipLocationChange:true});
  }
}