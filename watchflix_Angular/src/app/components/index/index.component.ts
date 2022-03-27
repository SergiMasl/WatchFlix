import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendEmailService } from 'src/app/service/send-email.service';
import { GetProfileService } from 'src/app/service/profile/get-profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  email!: string;
  constructor(private router: Router, private emailService: SendEmailService, private getProfile: GetProfileService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('username')){
      this.router.navigateByUrl(`/home`)
    }
    if(localStorage.getItem('adminUsername')){
      this.router.navigateByUrl(`/adminoptions`)
    }
    
  }
  
  goHome(){
    this.router.navigate(['/main'])
  }


  onFormSignUp(data: any){
    this.email = data.email;
    this.emailService.postEmail(this.email).subscribe(resp => {
      this.checking(resp)
    });
  }

  onFormgetProfile(){
    this.getProfile.getProfileUser("user1").subscribe(data=> this.router.navigate(['/getprofileuser']))
  }

  goNext(resp: string){
    this.router.navigateByUrl(`/verPage?email=${this.email}&status=${resp}`)
  } 

  checking(resp: string){
    if(resp == "408"){
      this.showerror("Email is already used... try other");

      this.router.navigateByUrl(`/main`)
    } else {
      this.showSuccess("Video was added");
      this.goNext(resp);
    }
  }

  showSuccess(e: string | undefined) {
    this.toastr.success(e);
  }

  showerror(e: string | undefined) {
    this.toastr.error(e);
  }
}
 