import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { AboutModel } from '../../models/about.model';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit { 
  about: AboutModel;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.about = this.aboutService.getAbout();
  }

}
