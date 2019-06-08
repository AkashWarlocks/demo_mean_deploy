import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../../services/httpPost.service';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-branches-page',
  templateUrl: './branches-page.component.html',
  styleUrls: ['./branches-page.component.css']
})
export class BranchesPageComponent implements OnInit {

  branches : Branch[] = [];

    constructor(private httpPostService: HttpPostService) { }


    ngOnInit() {
        const data = { api : "getBranches", data : { }}
        this.httpPostService.httpPost(data).subscribe((val) => {
         this.branches = val;
        },
        (error) => {        
        });
    }
}
