import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Branch, BatchModel } from '../../../models/branch.model';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { FormValidator } from '../../../validators/form.validator';

@Component({
  selector: 'app-admin-edit-branch',
  templateUrl: './admin-edit-branch.component.html',
  styleUrls: ['./admin-edit-branch.component.css']
})
export class AdminEditBranchComponent implements OnInit {
  
  branchData: Branch;

  form: FormGroup;
  batchForm: FormGroup;

  week : string [] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  weekDays: number[] = [];

  batches: BatchModel[] = [];

  weekdaysTouched: boolean = false;

  formError: string = null;

  weekType: string = "weekDays";

  images: string[] = [];

  imgExt: string[] = ['jpg', 'png'];

  constructor(private branchService: BranchService, 
              private formValidator: FormValidator,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params) => {
        const id = params['id'];
        this.branchData = this.branchService.getBranch(id);
        this.images = this.branchData.images;
        this.batches = this.branchData.batch;
      }
    );
      
    this.form = new FormGroup({
      city: new FormControl(this.branchData.city, {
        validators:[Validators.required]
      }),
      branch: new FormControl(this.branchData.branch, {
        validators:[Validators.required]
      }),
      address: new FormControl(this.branchData.address, {
        validators:[Validators.required]
      }),
      email: new FormControl(this.branchData.email, {
        validators:[Validators.required, Validators.email]
      }),
      phone: new FormControl(this.branchData.phone, {
        validators:[Validators.required]
      }),
      descripton: new FormControl(this.branchData.description, {
        validators:[Validators.required]
      }),
      image: new FormControl(null, {
        validators:[this.formValidator.imageValidate.bind(this)]
      })
    });

    this.batchForm = new FormGroup({
      week: new FormControl(this.weekType, {
        validators:[Validators.required]
      }),
      batchName: new FormControl(null, {
        validators:[Validators.required]
      }),
      fees: new FormControl(null, {
        validators:[Validators.required]
      }),
      start_timming: new FormControl(null, {
        validators:[Validators.required]
      }),
      end_timming: new FormControl(null, {
        validators:[Validators.required]
      }),
      weekDays: new FormArray(
        this.week.map( () => new FormControl(null)), {
          validators:[this.formValidator.daysValidator.bind(this)]
        }
      )
    });
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];
    if (file) {

      const ext : string = file.name.substring(file.name.lastIndexOf('.') + 1);
      if(!(this.imgExt.indexOf(ext)!=-1)) {
        return;
      }

      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();

        reader.onload = (event:any) => {
          this.images.push(event.target.result); 
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  addBatch() {
    if(this.batchForm.valid) {
      this.formError = null;

      let days : string[] = [];
      const week: number[] = this.weekDays.sort();
      for(let i = 0; i < week.length; i++) {
        days.push(this.week[week[i]]);
      }

      const batch: BatchModel = {
        batchType: this.weekType,
        days: days.join(', '),
        batchName: this.batchForm.value.batchName,
        time: this.batchForm.value.start_timming + ' - ' + this.batchForm.value.end_timming,
        fees: this.batchForm.value.fees
      }
      this.batches.push(batch);
      this.weekDays = [];
      this.batchForm.reset({week: this.weekType});
    }
  }

  deleteBatch(i: number) {
    this.batches.splice(i, 1);
  }
  
  editAddress() {
    if(this.form.invalid) {
      return this.formError = "*Please Fill All Fields of Branch";
    }

    if (this.batches.length === 0) {
      return this.formError = "*Please Add Batches";
    }

    if(this.form.valid) {
      this.formError = null;
  
      const editedBranch : Branch = {
        _id: this.branchData._id, 
        city: this.form.value.city, 
        branch: this.form.value.branch, 
        address: this.form.value.address, 
        email: this.form.value.email, 
        phone: this.form.value.phone, 
        description: this.form.value.descripton, 
        images: this.images,
        batch: this.batches,
        status: this.branchData.status
      }
      
      this.branchService.editBranch(editedBranch);
      this.form.reset();
      this.cancel();
    }
  }

  cancel() {
    this.router.navigate(["/admin", "branch", this.branchData._id], {relativeTo: this.route, skipLocationChange:true});
  }

  scheduleChange() {
    this.weekType = this.batchForm.value.week;
    console.log(this.weekType)
  }
  
  weekDay(event: any, index:number) {
    this.weekdaysTouched = true;
    
    if(event.target.checked) {
      return this.weekDays.push(index);
    }
    this.weekDays.splice(this.weekDays.findIndex((day) => day === index), 1);
  }

  isWeekType(weekType: string): boolean {
    const n = this.batches.length;
    for(let i = 0; i < n; i++) {
      if(this.batches[i].batchType === weekType) {
        return true;
      }
    }
    return false;
  }

}