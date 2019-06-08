import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../../../services/httpPost.service';
import { AboutModel } from '../../../models/about.model';

@Component({
  selector: 'app-admin-philosophy',
  templateUrl: './admin-philosophy.component.html',
  styleUrls: ['./admin-philosophy.component.css']
})
export class AdminPhilosophyComponent implements OnInit {

  about: AboutModel;

  loading: boolean = true;

  constructor(private httpPostService: HttpPostService) { }

  ngOnInit() {
    const data = { api : "getAbout", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
      this.about = val[0];
      this.loading = false;
    },
    (error) => {
    });
  }
}