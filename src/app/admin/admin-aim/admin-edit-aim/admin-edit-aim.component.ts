import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../../services/about.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-aim',
  templateUrl: './admin-edit-aim.component.html',
  styleUrls: ['./admin-edit-aim.component.css']
})
export class AdminEditAimComponent implements OnInit {

  form: FormGroup;

  aim: string;

  constructor(private aboutService: AboutService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.aim = this.aboutService.getAbout().aim;
    this.form = new FormGroup({
      aim: new FormControl(this.aim, {
        validators: [Validators.required]
      })
    });
  }

  saveAim() {
    if(this.form.valid) {
      this.aboutService.saveAim(this.form.value.aim);
      this.form.reset();
      this.cancel();
    }
  }
  
  cancel() {
    this.router.navigate(['/admin', 'about'], {relativeTo: this.route, skipLocationChange:true});
  }

}