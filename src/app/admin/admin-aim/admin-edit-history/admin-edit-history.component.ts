import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../../../services/about.service';

@Component({
  selector: 'app-admin-edit-history',
  templateUrl: './admin-edit-history.component.html',
  styleUrls: ['./admin-edit-history.component.css']
})
export class AdminEditHistoryComponent implements OnInit {

  form: FormGroup;

  history: string;

  constructor(private aboutService: AboutService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.history = this.aboutService.getAbout().history;
    this.form = new FormGroup({
      history: new FormControl(this.history, {
        validators: [Validators.required]
      })
    });
  }

  saveHistory() {
    if(this.form.valid) {
      this.aboutService.saveHistory(this.form.value.history);
      this.form.reset();
      this.cancel();
    }
  }
  
  cancel() {
    this.router.navigate(['/admin', 'about'], {relativeTo: this.route, skipLocationChange:true});
  }

}
