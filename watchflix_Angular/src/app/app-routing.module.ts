import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'; 
import { LayoutComponent } from './components/layout/layout.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home/home.component';
import { BrowesComponent } from './components/home/browes/browes.component';
import { ProfileComponent } from './components/forms/profile/profiles/profile.component';
import { VerificationNumComponent } from './components/forms/verification-num/verification-num.component';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';
import { AdminOptionsComponent } from './adminComponent/admin-options/admin-options.component';
import { AdminViewUsersComponent } from './adminComponent/admin-view-users/admin-view-users.component';
import { AdminHomeComponent } from './adminComponent/admin-home/admin-home.component';
import { AdminUpdateComponent } from './adminComponent/admin-update/admin-update.component';
import { AdminViewAdminComponent } from './adminComponent/admin-view-admin/admin-view-admin.component';
import { AdminDeleteComponent } from './adminComponent/admin-delete/admin-delete.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminAddComponent } from './adminComponent/admin-add/admin-add.component';
import { AdminProfComponent } from './adminComponent/admin-prof/admin-prof.component';


const routes: Routes = [
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

  { path: 'adminhome', component: AdminIndexComponent},
  { path: 'adminoptions', component: AdminOptionsComponent},
  { path: 'adminviewall', component: AdminViewUsersComponent },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'adminupdate', component: AdminUpdateComponent },
  { path: 'adminupdate/:id', component: AdminUpdateComponent },
  { path: 'showadmin', component: AdminViewAdminComponent},
  { path: 'deleteUsers', component: AdminDeleteComponent},
  { path: 'addAdmin', component: AdminAddComponent},
  { path: 'viewadminprof2', component: AdminProfComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
