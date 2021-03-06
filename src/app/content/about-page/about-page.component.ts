import { Component, OnInit } from '@angular/core';
import { AboutModel } from '../../models/about.model';
import { HttpPostService } from '../../services/httpPost.service';
import { Faculty } from '../../models/faculty.model';

declare var $:any;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
}) 
export class AboutPageComponent implements OnInit {

  faculties : Faculty[] = [];
  
  aboutUs: AboutModel;

  constructor(private httpPostService: HttpPostService) { }

  ngOnInit() {
    const aboutData = { api : "getAbout", data : {}}
    this.httpPostService.httpPost(aboutData).subscribe((val) => {
      this.aboutUs = val[0];
    },
    (error) => {
    });

    const facultyData = { api : "getFaculties", data : {}}
    this.httpPostService.httpPost(facultyData).subscribe((val: any) => {
      this.faculties = val;
      console.log(this.faculties);
    },
    (error) => {
    });

    document.body.classList.add('bg-about');
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-about');
  }
}