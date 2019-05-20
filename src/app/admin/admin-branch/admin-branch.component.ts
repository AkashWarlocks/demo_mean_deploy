import { Component, OnInit } from '@angular/core';
import { Branch } from '../../models/branch.model';
import { BranchService } from '../../services/branch.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-branch',
  templateUrl: './admin-branch.component.html',
  styleUrls: ['./admin-branch.component.css']
})
export class AdminBranchComponent implements OnInit {

    branches : Branch[] = [];

    constructor(private branchService: BranchService,
        private router: Router,
        private route: ActivatedRoute) { }


    ngOnInit() {
        this.branches = this.branchService.getBranches();
    }

    onNewBranch() {
        this.router.navigate(['new'], {relativeTo:this.route, skipLocationChange: true});
    }

}
