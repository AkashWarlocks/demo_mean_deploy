import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { StudentModel } from '../../../models/student.model';
import { Branch, BatchModel } from '../../../models/branch.model';
import { HttpPostService } from '../../../services/httpPost.service';

@Component({
  selector: 'app-admin-show-student',
  templateUrl: './admin-show-student.component.html',
  styleUrls: ['./admin-show-student.component.css']
})
export class AdminShowStudentComponent implements OnInit {

  student: StudentModel;

  loading : boolean = true;

  branch : Branch;

  batch: BatchModel;

  constructor(private httpPostService: HttpPostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.
    subscribe(
      (params: Params) => {
        const _id = params['id'];
        const studentData = { api : "getStudent", data : { _id }}
        this.httpPostService.httpPost(studentData).subscribe((val) => {
         this.student = val;0
         
         const branchData = { api : "getBranch", data : { _id : this.student.branch }}
         this.httpPostService.httpPost(branchData).subscribe((val) => {
           this.branch = val;
           this.batch = this.branch.batch.find(batch => (batch.batchName === this.student.batchName && batch.batchType === this.student.batch));
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

  changeStatus(_id:string, status: string) {
    let statusConfirm: any = true;
    if(status === "deactivated") {
      statusConfirm = confirm("do you really want to Deactivate Branch??");
    }  
    if(statusConfirm) {
      this.loading = true;
      const data = { api : "changeStudentStatus", data : { _id, status }}
      this.httpPostService.httpPostAuth(data).subscribe((val) => {
       this.cancel();
      },
      (error) => {
       this.loading = false;
      });
    }
  }
  
  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'student'], {relativeTo: this.route, skipLocationChange:true});
  }
}