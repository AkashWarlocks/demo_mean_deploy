import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Branch } from '../../models/branch.model';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {

  allStudents : StudentModel[] = [];
  students : StudentModel[] = [];

  noStudent = 'Please Select Branch or Search Student Name..';

  branches: Branch[] = [];

    constructor(private studentService: StudentService,
                private branchService: BranchService,
                private router: Router,
                private route: ActivatedRoute) { }


    ngOnInit() {
        this.allStudents = this.studentService.getStudents();
        if(this.allStudents.length > 0) {
          this.branches = this.branchService.getBranches();
        }
    }

    onNewStudent() {
        this.router.navigate(['new'], {relativeTo:this.route, skipLocationChange: true});
    }

    onSearch(search:string) {
      if(search != '') {
        const students : StudentModel[] = this.allStudents;
        this.students = [];
        students.forEach((student) => {
          if(student.name.toLowerCase().includes(search.toLowerCase())) {
            this.students.push(student);
          }
        });
        if(this.students.length === 0) {
          this.noStudent = "No Students Found..";
        }
      }
    }

    onSelectBranch(branch:string) {
      if(branch != '') {
        const students : StudentModel[] = this.allStudents;
        this.students = [];
        students.forEach((student) => {
          if(student.branch === branch) {
            this.students.push(student);
          }
        });
      }
    }
}