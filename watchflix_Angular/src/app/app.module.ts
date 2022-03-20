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
