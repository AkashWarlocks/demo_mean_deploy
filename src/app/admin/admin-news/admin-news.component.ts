import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpPostService } from '../../services/httpPost.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: any[] = [];

  loading: boolean = true;

  constructor(private httpPostService: HttpPostService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const data = { api : "getAllNews", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
      this.news = val;
      this.loading = false;
    },
    (error) => {
    });
  }

  deleteNews(_id:string) {
    const deleteConfirm = confirm("do you really want to Delete News??");  
    if(deleteConfirm) {
      this.loading = true;
      const data = { api : "deleteNews", data : { _id }}
      this.httpPostService.httpPostAuth(data).subscribe((val) => {
       this.loading = false;
      },
      (error) => {
       this.loading = false;
      });
    }    
  }

  onNewNews() {
    this.loading = true;
    this.router.navigate(['new'], {relativeTo:this.route, skipLocationChange:true});
  }
}