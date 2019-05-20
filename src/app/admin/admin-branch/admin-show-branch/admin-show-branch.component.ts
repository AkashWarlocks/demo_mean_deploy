import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Branch, BatchModel } from '../../../models/branch.model';

@Component({
  selector: 'app-admin-show-branch',
  templateUrl: './admin-show-branch.component.html',
  styleUrls: ['./admin-show-branch.component.css']
})
export class AdminShowBranchComponent implements OnInit {
  
  branch: Branch;

  batches : BatchModel[] = [];

  week: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  days: boolean[] = [true, false, false, false, false, false, false];

  constructor(private branchService: BranchService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        const id = params['id'];
        this.branch = Object.assign(this.branchService.getBranch(id));
        this.batches = this.branch.batch;
      }
    );
  }

  changeStatus(id:string, status: string) {
    this.branchService.changeStatus(id, status);
    this.cancel();
  }
  
  editAddress() {
    this.router.navigate(['edit'], {relativeTo: this.route, skipLocationChange:true});
  }
  
  cancel() {
    this.router.navigate(['/admin', 'branch'], {relativeTo: this.route, skipLocationChange:true});
  }

  isWeekDays(): boolean {
    const n = this.batches.length;
    for(let i = 0; i < n; i++) {
      if(this.batches[i].batchType === 'weekDays') {
        return true;
      }
    }
    return false;
  }

  isWeekEnds(): boolean {
    const n = this.batches.length;
    for(let i = 0; i < n; i++) {
      if(this.batches[i].batchType === 'weekEnds') {
        return true;
      }
    }
    return false;
  }

}