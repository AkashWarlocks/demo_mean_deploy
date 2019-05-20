import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../services/faculty.service';
import { Faculty } from '../../../models/faculty.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { FormValidator } from '../../../validators/form.validator';

@Component({
  selector: 'app-admin-edit-faculty',
  templateUrl: './admin-edit-faculty.component.html',
  styleUrls: ['./admin-edit-faculty.component.css']
})
export class AdminEditFacultyComponent implements OnInit {

  faculty: Faculty;
  form: FormGroup;

  formError: boolean = false;

  imgExt: string[] = ['jpg', 'png'];

  image: string;
  
  constructor(private facultyService : FacultyService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        const id = params['id'];
        this.faculty = this.facultyService.getFaculty(id);
        this.image = this.faculty.image;
      }
    );

    this.form = new FormGroup({
      name: new FormControl(this.faculty.name, {
        validators: [Validators.required]
      }),
      birthDate: new FormControl(this.faculty.birthDate, {
        validators: [Validators.required]
      }),
      email: new FormControl(this.faculty.email, {
        validators: [Validators.required, Validators.email]
      }),
      phone: new FormControl(this.faculty.phone, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
      description: new FormControl(this.faculty.description, {
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
  
  editFaculty() {
    if(this.form.invalid) {
      this.formError = true;
    }
  
    if(this.form.valid) {
      this.formError = false;
      const faculty: Faculty = {
        _id: this.faculty._id, 
        name: this.form.value.name, 
        birthDate: this.form.value.birthDate, 
        description: this.form.value.description, 
        image: this.image,
        email: this.form.value.email, 
        phone: this.form.value.phone, 
        status: this.faculty.status
      }
      
      this.facultyService.editFaculty(faculty);
      this.form.reset();
      this.cancel();
    }
  }
  
  cancel() {
    this.router.navigate(['/admin', 'faculty', this.faculty._id], {relativeTo:this.route, skipLocationChange:true});
  }
}