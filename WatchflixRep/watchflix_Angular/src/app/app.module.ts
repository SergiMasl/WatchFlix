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
import { ProfileComponent } from './components/forms/profile/profile.component';
import { VerificationNumComponent } from './components/forms/verification-num/verification-num.component';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';
import { ErrorVerificationEmailComponent } from './components/forms/error-verification-email/error-verification-email.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminOptionsComponent } from './components/admin-options/admin-options.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component';
import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
import { AdminViewAdminComponent } from './components/admin-view-admin/admin-view-admin.component';



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
    AdminHomeComponent,
    AdminOptionsComponent,
    AdminDeleteComponent,
    AdminViewUsersComponent,
    AdminUpdateComponent,
    AdminViewAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
