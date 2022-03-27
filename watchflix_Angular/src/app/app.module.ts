import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { IndexComponent } from './components/index/index.component';
import { SignInFormComponent } from './components/forms/sign-in-form/sign-in-form.component';
import { HomeComponent } from './components/home/home/home.component';
import { BrowesComponent } from './components/home/browes/browes.component';
import { PostComponent } from './components/home/post/post.component';
import { CategoryComponent } from './components/home/category/category.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { ProfileComponent } from './components/forms/profile/profiles/profile.component';
import { VerificationNumComponent } from './components/forms/verification-num/verification-num.component';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';
import { ErrorVerificationEmailComponent } from './components/forms/error-verification-email/error-verification-email.component';
import { ViewProfileComponent } from './components/forms/profile/view-profile/view-profile.component';
import { UpdateProfileComponent } from './components/forms/profile/update-profile/update-profile.component';
import { NavBarHomeComponent } from './components/home/nav-bar-home/nav-bar-home.component';
import { SingleVideoComponent } from './components/home/single-video/single-video.component';
import { AdminDeleteComponent } from './adminComponent/admin-delete/admin-delete.component';
import { AdminHomeComponent } from './adminComponent/admin-home/admin-home.component';
import { AdminOptionsComponent } from './adminComponent/admin-options/admin-options.component';
import { AdminViewAdminComponent } from './adminComponent/admin-view-admin/admin-view-admin.component';
import { AdminViewUsersComponent } from './adminComponent/admin-view-users/admin-view-users.component';
import { AdminUpdateComponent } from './adminComponent/admin-update/admin-update.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    SingInComponent,
    SingUpComponent,
    IndexComponent,
    SignInFormComponent,
    HomeComponent,
    BrowesComponent,
    PostComponent,
    CategoryComponent,
    SignUpComponent,
    ProfileComponent,
    VerificationNumComponent,
    VerificationPageComponent,
    ErrorVerificationEmailComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    NavBarHomeComponent,
    SingleVideoComponent,
    AdminDeleteComponent,
    AdminHomeComponent,
    AdminOptionsComponent,
    AdminViewAdminComponent,
    AdminViewUsersComponent,
    AdminUpdateComponent,
    AdminIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
