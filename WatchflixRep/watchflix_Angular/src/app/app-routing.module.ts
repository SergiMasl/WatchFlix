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
import { AdminOptionsComponent } from './components/admin-options/admin-options.component';
import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
import { AdminViewAdminComponent } from './components/admin-view-admin/admin-view-admin.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component';
import { AdminProfComponent } from './components/admin-prof/admin-prof.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';



const routes: Routes = [
  // { path: '', component: LayoutComponent},
  { path: 'main', component: IndexComponent },
  { path: 'signin', component: SingInComponent },
  { path: 'signup', component: SingUpComponent },
  { path: 'signup/:email', component: SingUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'browes/:u_name', component: BrowesComponent },
  { path: 'getprofileuser', component: ProfileComponent },
  { path: 'verification', component: VerificationNumComponent },
  { path: 'verification/:email', component: VerificationNumComponent },
  { path: 'verPage', component: VerificationPageComponent },
  // { path: 'verPage/:email', component: VerificationPageComponent }


  { path: 'adminoptions', component: AdminOptionsComponent},
  { path: 'adminviewall', component: AdminViewUsersComponent },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'adminupdate', component: AdminUpdateComponent },
  { path: 'adminupdate/:id', component: AdminUpdateComponent },
  { path: 'showadmin', component: AdminViewAdminComponent},
  { path: 'deleteUsers', component: AdminDeleteComponent},
  { path: 'viewaprof', component: AdminProfComponent},
  { path: 'getadminprofile', component: AdminProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
