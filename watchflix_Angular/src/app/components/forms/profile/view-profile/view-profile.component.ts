import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewprofService } from 'src/app/service/profile/viewprof.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  prof = {username: localStorage.getItem("username")};
  
  profObj = {
    username: "",
    email: "",
    mobile: "",
    country: "",
    gender: "",
    is_active: false,
    name: "",
  }
  constructor(private viewProf: ViewprofService, private router: Router) { }

  ngOnInit(): void {
   this.viewProf.getProf(this.prof).subscribe( (resp: User)=> this.checking(resp));
  }

  checking(resp: User){
    if(resp == null){
      alert("Something wrong!")
      this.router.navigateByUrl(`/home`)
    } else {
      this.profObj.country = resp.country;
      this.profObj.email = resp.email;
      this.profObj.username = resp.username;
      this.profObj.mobile = resp.mobile;
      this.profObj.country = resp.country;
      this.profObj.gender = resp.gender;
      this.profObj.name = resp.name;
    }
  }

  UpdateProfile(){
    this.router.navigateByUrl(`/getprofileuser?status=update`)
  }
}
