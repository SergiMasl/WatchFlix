import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'; 
import { LayoutComponent } from './components/layout/layout.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home/home.component';
import { BrowesComponent } from './components/home/browes/browes.component';
import { ProfileComponent } from './components/forms/profile/profile.component';
import { VerificationNumComponent } from './components/forms/verification-num/verification-num.component';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';


const routes: Routes = [
  // { path: '', component: LayoutComponent},
  { path: 'main', component: IndexComponent },
  { path: 'signin', component: SingInComponent },
  { path: 'signup', component: SingUpComponent },
  { path: 'signup/:email', component: SingUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'browes', component: BrowesComponent },
  { path: 'browes/:u_name', component: BrowesComponent },
  { path: 'getprofileuser', component: ProfileComponent },
  { path: 'verification', component: VerificationNumComponent },
  { path: 'verification/:email', component: VerificationNumComponent },
  { path: 'verPage', component: VerificationPageComponent },
  // { path: 'verPage/:email', component: VerificationPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
