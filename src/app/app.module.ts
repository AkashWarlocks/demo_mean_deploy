import { NgModule } from '@angular/core';

//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

//ROUTES
import { AppRoutes } from './app.routes.module';

//GUARDS
import { AdminAuthGuard, LoginAuthGuard, StudentAuthGuard, FacultuAuthGuard } from './auth/auth.guard';

//SERVICES

import { AuthService } from './auth/auth.service';

//COMPONENTS
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';

import { AdminComponent } from './admin/admin.component';

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { AdminEditAimComponent } from './admin/admin-about/admin-edit-aim/admin-edit-aim.component';
import { AdminHistoryComponent } from './admin/admin-about/admin-history/admin-history.component';
import { AdminEditHistoryComponent } from './admin/admin-about/admin-edit-history/admin-edit-history.component';
import { AdminPhilosophyComponent } from './admin/admin-about/admin-philosophy/admin-philosophy.component';
import { AdminEditPhilosophyComponent } from './admin/admin-about/admin-edit-philosophy/admin-edit-philosophy.component';

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

import { AdminExamComponent } from './admin/admin-exam/admin-exam.component';

import { AdminGallaryComponent } from './admin/admin-gallary/admin-gallary.component';
import { AdminAddPhotosComponent } from './admin/admin-gallary/admin-add-photos/admin-add-photos.component';

import { AdminAttendanceComponent } from './admin/admin-attendance/admin-attendance.component';

import { AdminStudentComponent } from './admin/admin-student/admin-student.component';
import { AdminAddStudentComponent } from './admin/admin-student/admin-add-student/admin-add-student.component';
import { AdminShowStudentComponent } from './admin/admin-student/admin-show-student/admin-show-student.component';
import { AdminEditStudentComponent } from './admin/admin-student/admin-edit-student/admin-edit-student.component';
import { AdminStudentReceiptsComponent } from './admin/admin-student/admin-student-receipts/admin-student-receipts.component';
import { AdminStudentGenerateReceiptComponent } from './admin/admin-student/admin-student-generate-receipt/admin-student-generate-receipt.component';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

import { StudentComponent } from './student/student.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentAttendanceComponent } from './student/student-attendance/student-attendance.component';
import { StudentReceiptsComponent } from './student/student-receipts/student-receipts.component';

import { FacultyComponent } from './faculty/faculty.component';

import { FormValidator } from './validators/form.validator';

import { HttpPostService } from './services/httpPost.service';
import { StudentShowReceiptComponent } from './student/student-receipts/student-show-receipt/student-show-receipt.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    
    AdminComponent,

    AdminDashboardComponent,
    
    AdminAboutComponent,
    AdminEditAimComponent,
    AdminHistoryComponent,
    AdminEditHistoryComponent,
    AdminPhilosophyComponent,
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

    AdminGallaryComponent,
    AdminAddPhotosComponent,

    AdminAttendanceComponent,

    AdminFacultyComponent,
    AdminAddFacultyComponent,
    AdminShowFacultyComponent,
    AdminEditFacultyComponent,

    AdminStudentComponent,
    AdminAddStudentComponent,
    AdminShowStudentComponent,
    AdminEditStudentComponent,
    AdminStudentReceiptsComponent,
    AdminStudentGenerateReceiptComponent,

    PageNotFoundComponent,
    ServerErrorComponent,
        
    FacultyComponent,
        
    StudentComponent,
    StudentDashboardComponent,
    StudentReceiptsComponent,
    StudentAttendanceComponent,
    StudentShowReceiptComponent
        
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutes,
    HttpClientModule
  ],

  providers: [
    
    HttpPostService,
    
    LoginAuthGuard,
    AdminAuthGuard,
    FacultuAuthGuard,
    StudentAuthGuard,

    AuthService,

    FormValidator
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }