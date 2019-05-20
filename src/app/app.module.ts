import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes.module';

import { HttpClientModule } from '@angular/common/http';

import { AboutService } from './services/about.service';
import { ArticleService } from './services/articles.service';
import { BranchService } from './services/branch.service';
import { EnquiryService } from './services/enquiry.service';
import { FacultyService } from './services/faculty.service';
import { StudentService } from './services/student.service';

import { AuthService } from './auth/auth.service';
import { RootService } from './services/root.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminAuthGuard, LoginAuthGuard, StudentAuthGuard, FacultuAuthGuard } from './auth/auth.guard';
import { ImageService } from './services/image.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { AdminComponent } from './admin/admin.component';

import { AdminAboutComponent } from './admin/admin-aim/admin-about.component';
import { AdminEditAimComponent } from './admin/admin-aim/admin-edit-aim/admin-edit-aim.component';

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

import { AdminFacultyComponent } from './admin/admin-faculty/admin-faculty.component';
import { AdminAddFacultyComponent } from './admin/admin-faculty/admin-add-faculty/admin-add-faculty.component';
import { AdminShowFacultyComponent } from './admin/admin-faculty/admin-show-faculty/admin-show-faculty.component';
import { AdminEditFacultyComponent } from './admin/admin-faculty/admin-edit-faculty/admin-edit-faculty.component';

import { AdminStudentComponent } from './admin/admin-student/admin-student.component';
import { AdminAddStudentComponent } from './admin/admin-student/admin-add-student/admin-add-student.component';
import { AdminShowStudentComponent } from './admin/admin-student/admin-show-student/admin-show-student.component';
import { AdminEditStudentComponent } from './admin/admin-student/admin-edit-student/admin-edit-student.component';

import { AdminExamComponent } from './admin/admin-exam/admin-exam.component';
import { FooterComponent } from './footer/footer.component';
import { AdminEditHistoryComponent } from './admin/admin-aim/admin-edit-history/admin-edit-history.component';
import { AdminEditPhilosophyComponent } from './admin/admin-aim/admin-edit-philosophy/admin-edit-philosophy.component';
import { FormValidator } from './validators/form.validator';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    AdminComponent,
    
    AdminAboutComponent,
    AdminEditAimComponent,
    AdminEditHistoryComponent,
    AdminEditPhilosophyComponent,

    AdminArticleComponent,
    AdminAddArticleComponent,
    AdminEditArticleComponent,
    AdminShowArticleComponent,
    
    AdminBranchComponent,
    AdminAddBranchComponent,
    AdminEditBranchComponent,
    AdminShowBranchComponent,

    AdminEnquiryComponent,
    AdminShowEnquiryComponent,
    AdminReplyEnquiryComponent,

    AdminExamComponent,

    AdminFacultyComponent,
    AdminAddFacultyComponent,
    AdminShowFacultyComponent,
    AdminEditFacultyComponent,

    AdminStudentComponent,
    AdminAddStudentComponent,
    AdminShowStudentComponent,
    AdminEditStudentComponent,

    PageNotFoundComponent,
        
    LoginComponent,
        
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    AboutService,
    ArticleService,
    BranchService,
    EnquiryService,
    FacultyService,
    StudentService,
    
    LoginAuthGuard,
    AdminAuthGuard,
    FacultuAuthGuard,
    StudentAuthGuard,

    AuthService,

    ImageService,

    RootService,

    FormValidator
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
