import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../../../services/about.service';

@Component({
  selector: 'app-admin-edit-philosophy',
  templateUrl: './admin-edit-philosophy.component.html',
  styleUrls: ['./admin-edit-philosophy.component.css']
})
export class AdminEditPhilosophyComponent implements OnInit {

  form: FormGroup;

  philosophy: string;

  constructor(private aimService: AboutService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.philosophy = this.aimService.getAbout().philosophy;
    this.form = new FormGroup({
      philosophy: new FormControl(this.philosophy, {
        validators: [Validators.required]
      })
    });
  }

  savePhilisophy() {
    if(this.form.valid) {
      this.aimService.savePhilosophy(this.form.value.philosophy);
      this.form.reset();
      this.cancel();
    }
  }
  
  cancel() {
    this.router.navigate(['/admin', 'about'], {relativeTo: this.route, skipLocationChange:true});
  }

}
