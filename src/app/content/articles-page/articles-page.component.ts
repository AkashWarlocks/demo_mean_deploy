import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../../services/httpPost.service';
import { Article } from '../../models/articles.model';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  articles: Article[] = [];

  constructor(private httpPostService: HttpPostService) { }

  ngOnInit() {
    const data = { api : "getArticles", data : {}}
    this.httpPostService.httpPost(data).subscribe((val) => {
     this.articles = val;
    },
    (error) => {
    });
  }
}
