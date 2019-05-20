import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { Branch, BatchModel } from '../../../models/branch.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../../../services/image.service';
import { FormValidator } from '../../../validators/form.validator';

@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css']
})
export class AdminAddStudentComponent implements OnInit {

  form: FormGroup;

  formError: boolean = false;

  image: string;

  imgExt: string[] = ['jpg', 'png'];

  branches: Branch[] = [];

  batches: BatchModel[] = [];

  weekType: string = "weekDays";

  constructor(private branchService: BranchService,
              private formValidator: FormValidator,
              private imageService: ImageService,
              private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.branches = this.branchService.getBranches();

    this.image = this.imageService.getProfileImage();

    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      birthDate: new FormControl(null, {
        validators: [Validators.required]
      }),
      firstGuardianName: new FormControl(null, {
        validators: [Validators.required]
      }),
      firstGuardianRelation: new FormControl(null, {
        validators: [Validators.required]
      }),
      secondGuardianName: new FormControl("", {}),
      secondGuardianRelation: new FormControl("", {}),
      workPlace: new FormControl("", {}),
      bloodGroup: new FormControl("", {}),
      medicalHistory: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
      address: new FormControl(null, {
        validators: [Validators.required]
      }),
      branch: new FormControl("", {
        validators: [Validators.required]
      }),
      batch: new FormControl(this.weekType, {
        validators: [Validators.required]
      }),
      batchName: new FormControl("", {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators:[this.formValidator.imageValidate.bind(this)]
      })
    });
  }

  branchChanged() {
    this.batches = [];
    const branch = this.branches.find((branch) => branch._id === this.form.value.branch);
    if(branch !== undefined) {
      const len = branch.batch.length;
      for(let i = 0; i < len; i++) {
        if(branch.batch[i].batchType === this.weekType) {
          this.batches.push(branch.batch[i])
        }
      }
    }
  }

  changeWeekType() {
    this.weekType = this.form.value.batch;
    this.branchChanged();
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

  addStudent() {
    if(this.form.invalid) {
      this.formError = true;
    }
  
    if(this.form.valid) {
      this.formError = false;
      this.studentService.addStudent(this.form.value.name, this.form.value.birthDate, this.form.value.bloodGroup, this.form.value.workPlace, this.image, this.form.value.firstGuardianName, this.form.value.firstGuardianRelation,  this.form.value.secondGuardianName, this.form.value.secondGuardianRelation, this.form.value.medicalHistory, this.form.value.phone, this.form.value.email, this.form.value.address, this.form.value.branch, this.form.value.batch, this.form.value.batchName, "activated");
      this.cancel();
    }
  }

  cancel() {
    this.router.navigate(['/admin', 'student'],{relativeTo:this.route, skipLocationChange:true})
  }
}