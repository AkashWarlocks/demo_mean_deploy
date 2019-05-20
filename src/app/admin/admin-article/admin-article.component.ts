import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/articles.service';
import { Article } from '../../models/articles.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService:ArticleService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  deleteArticle(id:string) {
    this.articleService.deleteArticle(id);
  }

  onNewArticle() {
    this.router.navigate(['new'], {relativeTo:this.route, skipLocationChange:true});
  }
}