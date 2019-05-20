import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAboutComponent } from './admin/admin-aim/admin-about.component';
import { AdminEditAimComponent } from './admin/admin-aim/admin-edit-aim/admin-edit-aim.component';
import { AdminEditHistoryComponent } from './admin/admin-aim/admin-edit-history/admin-edit-history.component';
import { AdminEditPhilosophyComponent } from './admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component';

import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AdminAddArticleComponent } from './admin/admin-article/admin-add-article/admin-add-article.component';
import { AdminShowArticleComponent } from './admin/admin-article/admin-show-article/admin-show-article.component';
import { AdminEditArticleComponent } from './admin/admin-article/admin-edit-article/admin-edit-article.component';

import { AdminBranchComponent } from './admin/admin-branch/admin-branch.component';
import { AdminAddBranchComponent } from './admin/admin-branch/admin-add-branch/admin-add-branch.component';
import { AdminShowBranchComponent } from './admin/admin-branch/admin-show-branch/admin-show-branch.component';
import { AdminEditBranchComponent } from './admin/admin-branch/admin-edit-branch/admin-edit-branch.component';

import { AdminEnquiryComponent } from './admin/admin-enquiry/admin-enquiry.component';
import { AdminShowEnquiryComponent } from './admin/admin-enquiry/admin-show-enquiry/admin-show-enquiry.component';
import { AdminReplyEnquiryComponent } from './admin/admin-enquiry/admin-reply-enquiry/admin-reply-enquiry.component';

import { AdminExamComponent } from './admin/admin-exam/admin-exam.component';

import { AdminFacultyComponent } from './admin/admin-faculty/admin-faculty.component';
import { AdminAddFacultyComponent } from './admin/admin-faculty/admin-add-faculty/admin-add-faculty.component';
import { AdminShowFacultyComponent } from './admin/admin-faculty/admin-show-faculty/admin-show-faculty.component';
import { AdminEditFacultyComponent } from './admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component';

import { AdminStudentComponent } from './admin/admin-student/admin-student.component';
import { AdminAddStudentComponent } from './admin/admin-student/admin-add-student/admin-add-student.component';
import { AdminShowStudentComponent } from './admin/admin-student/admin-show-student/admin-show-student.component';
import { AdminEditStudentComponent } from './admin/admin-student/admin-edit-student/admin-edit-student.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './login/login.component';

import { AdminAuthGuard, LoginAuthGuard, StudentAuthGuard, FacultuAuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';

const appRoutes : Routes = [
    {path:'', redirectTo:'/login', pathMatch:'full'},
    
    {path:'login', component : LoginComponent, canActivate: [ LoginAuthGuard ]},
    {path:'login/:auth', component : LoginComponent, canActivate: [ LoginAuthGuard ]},

    {path:'admin', component : AdminComponent, canActivate: [ AdminAuthGuard ]},
  
    {path:'admin/about', component : AdminAboutComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/about/editaim', component : AdminEditAimComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/about/edithistory', component : AdminEditHistoryComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/about/editphilosophy', component : AdminEditPhilosophyComponent, canActivate: [ AdminAuthGuard ]},

    {path:'admin/faculty', component : AdminFacultyComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/faculty/new', component : AdminAddFacultyComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/faculty/:id', component : AdminShowFacultyComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/faculty/:id/edit', component : AdminEditFacultyComponent, canActivate: [ AdminAuthGuard ]},

    {path:'admin/branch', component : AdminBranchComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/branch/new', component : AdminAddBranchComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/branch/:id', component : AdminShowBranchComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/branch/:id/edit', component : AdminEditBranchComponent, canActivate: [ AdminAuthGuard ]},

    {path:'admin/exams', component : AdminExamComponent, canActivate: [ AdminAuthGuard ]},
    
    {path:'admin/article', component : AdminArticleComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/article/new', component : AdminAddArticleComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/article/:id', component : AdminShowArticleComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/article/:id/edit', component : AdminEditArticleComponent, canActivate: [ AdminAuthGuard ]},

    {path:'admin/student', component : AdminStudentComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/student/new', component : AdminAddStudentComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/student/:id', component : AdminShowStudentComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/student/:id/edit', component : AdminEditStudentComponent, canActivate: [ AdminAuthGuard ]},

    {path:'admin/enquiry', component : AdminEnquiryComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/enquiry/:id', component: AdminShowEnquiryComponent, canActivate: [ AdminAuthGuard ]},
    {path:'admin/enquiry/:id/reply', component: AdminReplyEnquiryComponent, canActivate: [ AdminAuthGuard ]},
    
    {path:'page-not-found', component: PageNotFoundComponent},
    {path:'**', redirectTo:'page-not-found'}
  ];
  
  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutes {

}