import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { StudentModel } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';
import { BranchService } from '../../../services/branch.service';
import { Branch, BatchModel } from '../../../models/branch.model';

@Component({
  selector: 'app-admin-show-student',
  templateUrl: './admin-show-student.component.html',
  styleUrls: ['./admin-show-student.component.css']
})
export class AdminShowStudentComponent implements OnInit {

  student: StudentModel;

  branch : Branch;

  batch: BatchModel;

  constructor(private studentService : StudentService,
              private branchService : BranchService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.
    subscribe(
      (params: Params) => {
        const id = params['id'];
        this.student = this.studentService.getStudent(id);
      }
    );
    this.branch = this.branchService.getBranch(this.student.branch);
    this.batch = this.branch.batch.find(batch => (batch.batchName === this.student.batchName && batch.batchType === this.student.batch)
    );
  }

  changeStatus(id:string, status: string) {
    this.studentService.changeStatus(id, status);
    this.cancel();
  }
  
  cancel() {
    this.router.navigate(['/admin', 'student'], {relativeTo: this.route, skipLocationChange:true});
  }

}