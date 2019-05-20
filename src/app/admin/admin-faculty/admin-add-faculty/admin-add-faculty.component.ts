import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../services/faculty.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../../../services/image.service';
import { FormValidator } from '../../../validators/form.validator';

@Component({
  selector: 'app-admin-add-faculty',
  templateUrl: './admin-add-faculty.component.html',
  styleUrls: ['./admin-add-faculty.component.css']
})
export class AdminAddFacultyComponent implements OnInit {

  form: FormGroup;

  formError: boolean = false;

  imgExt: string[] = ['jpg', 'png'];

  image: string;

  constructor(private facultyService: FacultyService,
              private imageService: ImageService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.image = this.imageService.getProfileImage();


      this.form = new FormGroup({
        name: new FormControl(null, {
          validators: [Validators.required]
        }),
        birthDate: new FormControl(null, {
          validators: [Validators.required]
        }),
        email: new FormControl(null, {
          validators: [Validators.required, Validators.email]
        }),
        phone: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
        }),
        description: new FormControl(null, {
          validators: [Validators.required]
        }),
        image: new FormControl(null, {
          validators:[this.formValidator.imageValidate.bind(this)]
        })
      });
  }

  addFaculty() {
  if(this.form.invalid) {
    this.formError = true;
  }

  if(this.form.valid) {
    this.formError = false;
      this.facultyService.addFaculty(this.form.value.name, this.form.value.birthDate, this.form.value.description, this.image, this.form.value.email, this.form.value.phone, "activated");
      this.form.reset();
      this.cancel();
    }
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
  
  cancel() {
    this.router.navigate(['/admin', 'faculty'], {relativeTo:this.route, skipLocationChange:true});
  }

}