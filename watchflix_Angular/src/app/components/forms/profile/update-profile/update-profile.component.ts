import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateProfService } from 'src/app/service/profile/update-prof.service';
import { ViewprofService } from 'src/app/service/profile/viewprof.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  prof = {username: localStorage.getItem("username")};
  countries = ['USA', 'China', 'UAE', 'Japan']

  profObj = {
    username: "",
    email: "",
    mobile: "",
    country: "",
    is_active: false,
    name: "",
  }
  
  constructor(private viewProf: ViewprofService, private update: UpdateProfService, private router: Router) { }

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
      this.profObj.name = resp.name;
     }
   }

  goBack(){
    this.router.navigateByUrl(`/home`)
  }

  onFormSubmit(data: any){
    this.update.updateProf(this.profObj).subscribe( resp=> this.checkingUpdate(resp));
  }

  checkingUpdate(resp: any){
    if(resp == null){
      alert("Something wrong!")
      this.router.navigateByUrl(`/home`)
    } else {
      alert("Update Success!")
      localStorage.setItem("username", `${this.profObj.name}`);
      this.router.navigateByUrl(`/home`)
    }
  }
}
