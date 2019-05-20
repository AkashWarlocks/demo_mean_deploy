import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/articles.service';
import { Article } from '../../../models/articles.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-show-article',
  templateUrl: './admin-show-article.component.html',
  styleUrls: ['./admin-show-article.component.css']
})
export class AdminShowArticleComponent implements OnInit {
  article: Article;

  constructor(private articleService : ArticleService,
              private router: Router,
              private route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        const id = params['id'];
        this.article = this.articleService.getArticle(id);
      }
    );
  }

  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route, skipLocationChange:true});
  }

  delete() {
    this.articleService.deleteArticle(this.article._id);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/admin', 'article'], {relativeTo: this.route, skipLocationChange:true});
  }

}
