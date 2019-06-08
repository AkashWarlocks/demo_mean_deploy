import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/articles.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { FormValidator } from '../../../validators/form.validator';
import { HttpPostService } from '../../../services/httpPost.service';


@Component({
  selector: 'app-admin-edit-article',
  templateUrl: './admin-edit-article.component.html',
  styleUrls: ['./admin-edit-article.component.css']
})
export class AdminEditArticleComponent implements OnInit {

  article: Article;
  id:string;

  image: string;

  loading : boolean = true;

  imgExt: string[] = ['jpg', 'png'];
  
  form: FormGroup;

  formError: boolean = false;

  constructor(private httpPostService: HttpPostService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }
              
  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      body: new FormControl(null, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators:[this.formValidator.imageValidate.bind(this)]
      })
    });

    this.route.params
    .subscribe(
      (params:Params) => {
        const _id = params['id'];
        const data = { api : "getArticle", data : { _id }}
        this.httpPostService.httpPost(data).subscribe((val) => {
          this.article = val;
          this.image = this.article.image;
          this.form.setValue({
           title: this.article.title,
           body: this.article.body,
           image: null
          });
          this.loading = false;
        },
        (error) => {
        });
      }
    );
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
      this.loading = true;
      this.formError = false;
      const editedArticle : Article = {
        _id: this.article._id,
        title: this.form.value.title,
        body: this.form.value.body,
        image: this.image
      }
      const data = { api : "editArticle", data : editedArticle }
      this.httpPostService.httpPost(data).subscribe((val) => {
       this.cancel();
      },
      (error) => {
      this.loading = false;   
      });
    }
  }
  
  cancel() {
    this.loading = true;
    this.router.navigate(['/admin', 'article', this.article._id],{relativeTo: this.route, skipLocationChange:true});
  }
}