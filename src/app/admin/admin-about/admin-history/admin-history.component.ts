import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../../../services/httpPost.service';
import { AboutModel } from '../../../models/about.model';
@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.component.html',
  styleUrls: ['./admin-history.component.css']
})
export class AdminHistoryComponent implements OnInit {

  about: AboutModel;

  loading: boolean = true;

  constructor(private httpPostService: HttpPostService) { }

  ngOnInit() {
    const data = { api : "getAbout", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
      this.about = val;
      this.loading = false;
    },
    (error) => {
    });  
  }
}
