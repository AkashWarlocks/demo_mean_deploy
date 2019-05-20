import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../services/faculty.service';
import { Faculty } from '../../../models/faculty.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admin-show-faculty',
  templateUrl: './admin-show-faculty.component.html',
  styleUrls: ['./admin-show-faculty.component.css']
})
export class AdminShowFacultyComponent implements OnInit {

  faculty: Faculty;

  constructor(private facultyService : FacultyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.
    subscribe(
      (params: Params) => {
        const id = params['id'];
        this.faculty = this.facultyService.getFaculty(id);
      }
    );
  }

  changeStatus(id:string, status:string) {
    this.facultyService.changeStatus(id, status);
    this.cancel();
  }
  
  cancel() {
    this.router.navigate(['/admin', 'faculty'], {relativeTo: this.route, skipLocationChange:true});
  }
} 