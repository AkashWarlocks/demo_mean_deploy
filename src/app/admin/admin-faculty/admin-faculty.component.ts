import { Component, OnInit } from '@angular/core';
import { Faculty } from '../../models/faculty.model';
import { FacultyService } from '../../services/faculty.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-faculty',
  templateUrl: './admin-faculty.component.html',
  styleUrls: ['./admin-faculty.component.css']
})
export class AdminFacultyComponent implements OnInit {

  faculties : Faculty[] = [];
  
  constructor(private facultyService: FacultyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.faculties = this.facultyService.getFaculties();  
  }

  onNewFaculty() {
    this.router.navigate(['new'], {relativeTo:this.route, skipLocationChange:true});
  }
}