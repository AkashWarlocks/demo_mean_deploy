import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches-page',
  templateUrl: './branches-page.component.html',
  styleUrls: ['./branches-page.component.css']
})
export class BranchesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  branches = [{"_id":"string","branch":"Thane branch","city":"Thane","address":"kasarvadavali","mail":"dancingSoul@mail.com","phone":"9876543210","description":"Fully air conditioned and spacious","images":["sring"],"batches":[{"batchType":"Weekdays","days":"Mon,Tue","batchName":"Beginner","time":"2-3","fees":"string"},{"batchType":"Weekends","days":"Sat,Sun","batchName":"Intermediate","time":"3 - 6","fees":"string"}],"status":"string"},{"_id":"string","branch":"Thane branch","city":"Thane","address":"kasarvadavali","mail":"dancingSoul@mail.com","phone":"9876543210","description":"Fully air conditioned and spacious","images":["sring"],"batches":[{"batchType":"Weekdays","days":"Mon,Tue","batchName":"Beginner","time":"2-3","fees":"string"},{"batchType":"Weekends","days":"Sat,Sun","batchName":"Intermediate","time":"3 - 6","fees":"string"}],"status":"string"}];

}
