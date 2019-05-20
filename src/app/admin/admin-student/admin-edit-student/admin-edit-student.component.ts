import { Component, OnInit } from '@angular/core';
import { Branch, BatchModel } from '../../../models/branch.model';
import { BranchService } from '../../../services/branch.service';
import { StudentService } from '../../../services/student.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { StudentModel } from '../../../models/student.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormValidator } from '../../../validators/form.validator';

@Component({
  selector: 'app-admin-edit-student',
  templateUrl: './admin-edit-student.component.html',
  styleUrls: ['./admin-edit-student.component.css']
})

export class AdminEditStudentComponent implements OnInit {

  form: FormGroup;

  formError: boolean = false;

  branches: Branch[] = [];
  student: StudentModel;

  imgExt: string[] = ['jpg', 'png'];

  branch: Branch;

  image: string;

  batches: BatchModel[] = [];

  weekType: string = "weekDays";

  constructor(private branchService: BranchService,
              private studentService: StudentService,
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.branches = this.branchService.getBranches();
    this.route.params
    .subscribe(
      (params:Params) => {
        const id = params['id'];
        this.student = Object.assign(this.studentService.getStudent(id));
        this.branch = this.branches.find((branch) => branch._id === this.student.branch);
        this.image = this.student.image;
      }
    );

    this.form = new FormGroup({
      name: new FormControl(this.student.name, {
        validators: [Validators.required]
      }),
      birthDate: new FormControl(this.student.birthDate, {
        validators: [Validators.required]
      }),
      firstGuardianName: new FormControl(this.student.firstGuardianName, {
        validators: [Validators.required]
      }),
      firstGuardianRelation: new FormControl(this.student.firstGuardianRelation, {
        validators: [Validators.required]
      }),
      secondGuardianName: new FormControl(this.student.secondGuardianName, {}),
      secondGuardianRelation: new FormControl(this.student.secondGuardianRelation, {}),
      workPlace: new FormControl(this.student.workPlace, {}),
      bloodGroup: new FormControl(this.student.bloodGroup, {}),
      medicalHistory: new FormControl(this.student.medicalHistory, {
        validators: [Validators.required]
      }),
      email: new FormControl(this.student.email, {
        validators: [Validators.required, Validators.email]
      }),
      phone: new FormControl(this.student.phone, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
      address: new FormControl(this.student.address, {
        validators: [Validators.required]
      }),
      branch: new FormControl(this.student.branch, {
        validators: [Validators.required]
      }),
      batch: new FormControl(this.student.batch, {
        validators: [Validators.required]
      }),
      batchName: new FormControl(this.student.batchName, {
        validators: [Validators.required]
      }),
      image: new FormControl(null, {
        validators:[this.formValidator.imageValidate.bind(this)]
      })
    });

    this.branchChanged();
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


  editStudent() {
    if(this.form.invalid) {
      this.formError = true;
    }
  
    if(this.form.valid) {
      this.formError = false;
      const student : StudentModel = {
        _id: this.student._id, 
        name: this.form.value.name, 
        birthDate: this.form.value.birthDate, 
        bloodGroup: this.form.value.bloodGroup, 
        workPlace: this.form.value.workPlace, 
        image: this.image, 
        firstGuardianName: this.form.value.firstGuardianName, 
        firstGuardianRelation: this.form.value.firstGuardianRelation, 
        secondGuardianName: this.form.value.secondGuardianName, 
        secondGuardianRelation: this.form.value.secondGuardianRelation, 
        medicalHistory: this.form.value.medicalHistory, 
        phone: this.form.value.phone, 
        email: this.form.value.email, 
        address: this.form.value.address, 
        branch: this.form.value.branch, 
        batch: this.form.value.batch, 
        batchName: this.form.value.batchName, 
        status: this.student.status
      }
      
      this.studentService.editStudent(student);
      this.cancel();
    }
    
  }

  cancel() {
    this.router.navigate(['/admin', 'student', this.student._id],{relativeTo:this.route, skipLocationChange:true});
  }
}