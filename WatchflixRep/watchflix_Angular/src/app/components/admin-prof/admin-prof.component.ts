import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Admin';
import { ViewadminprofService } from 'src/app/service/profile/viewadminprof.service';

@Component({
  selector: 'app-admin-prof',
  templateUrl: './admin-prof.component.html',
  styleUrls: ['./admin-prof.component.css']
})
export class AdminProfComponent implements OnInit {
  prof = {adminUsername: localStorage.getItem("username")};
  
  profObj = {
    adminEmail: "",
    adminName: "",
    adminUsername: "",
    adminPassword: ""
  
  }
  constructor(private viewadminprof: ViewadminprofService, private router: Router) { }

  ngOnInit(): void {
   this.viewadminprof.getProf(this.prof).subscribe( (resp: Admin)=> this.checking(resp));
  }

  checking(resp: Admin){
    if(resp == null){
      alert("Something wrong!")
      this.router.navigateByUrl(`/adminhome`)
    } else {
      this.profObj.adminEmail = resp.adminEmail;
      this.profObj.adminName = resp.adminName;
      this.profObj.adminUsername = resp.adminUsername;
      this.profObj.adminPassword = resp.adminPassword;
      
    }
  }

  UpdateProfile(){
    this.router.navigateByUrl(`/getadminprof?status=update`)
  }
}