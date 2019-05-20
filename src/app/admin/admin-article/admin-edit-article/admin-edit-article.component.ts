import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/articles.service';
import { Article } from '../../../models/articles.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { FormValidator } from '../../../validators/form.validator';


@Component({
  selector: 'app-admin-edit-article',
  templateUrl: './admin-edit-article.component.html',
  styleUrls: ['./admin-edit-article.component.css']
})
export class AdminEditArticleComponent implements OnInit {

  article: Article;
  id:string;

  image: string;

  imgExt: string[] = ['jpg', 'png'];
  
  form: FormGroup;

  formError: boolean = false;

  constructor(private articleService: ArticleService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        const id = params['id'];
        this.article = this.articleService.getArticle(id);
        this.image = this.article.image;
      }
    );
    this.form = new FormGroup({
      title: new FormControl(this.article.title, {
        validators: [Validators.required]
      }),
      body: new FormControl(this.article.body, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators:[this.formValidator.imageValidate.bind(this)]
      })
    });
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];
    if (file) {

      const ext : string = file.name.substring(file.name.lastIndexOf('.') + 1);
      if(!(this.imgExt.indexOf(ext)!=-1)) {
        return;
      }

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.image = event.target.result; 
      }

      reader.readAsDataURL(file);
    }
  }

  editArticle() {
    if(this.form.invalid) {
      this.formError = true;
    }

    if(this.form.valid) {
      this.formError = false;
      const editedArticle : Article = {
        _id: this.article._id, 
        title: this.form.value.title, 
        body: this.form.value.body,
        image: this.image
      }
      this.articleService.editArticle(editedArticle);
      this.cancel();
    }
  }
  
  cancel() {
    this.router.navigate(['/admin', 'article', this.article._id],{relativeTo: this.route, skipLocationChange:true});
  }
}
