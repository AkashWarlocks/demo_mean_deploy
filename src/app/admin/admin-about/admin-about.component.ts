import { Component, OnInit } from '@angular/core';
import { AboutModel } from '../../models/about.model';
import { HttpPostService } from '../../services/httpPost.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit { 
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