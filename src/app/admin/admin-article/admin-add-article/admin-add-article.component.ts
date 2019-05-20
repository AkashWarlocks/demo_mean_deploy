import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageService } from '../../../services/image.service';
import { FormValidator } from '../../../validators/form.validator';

@Component({
  selector: 'app-admin-add-article',
  templateUrl: './admin-add-article.component.html',
  styleUrls: ['./admin-add-article.component.css']
})
export class AdminAddArticleComponent implements OnInit {
  
  form: FormGroup;

  formError: boolean = false;

  image : string;

  imgExt: string[] = ['jpg', 'png'];

  constructor(private articleService : ArticleService,
              private imageService: ImageService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getNoImage();

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

  

  
  addArticle() {
    if(this.form.invalid) {
      this.formError = true;
    }

    if(this.form.valid) {
      this.formError = false;
      this.articleService.addArticle(this.form.value.title, this.form.value.body, this.image);
      this.form.reset();
      this.cancel();
    }
  }

  cancel() {
    this.router.navigate(["/admin", "article"], {relativeTo: this.route, skipLocationChange:true});        
  }

}