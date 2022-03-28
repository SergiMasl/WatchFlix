import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerificationNumService } from 'src/app/service/profile/verification-num.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-verification-num',
  templateUrl: './verification-num.component.html',
  styleUrls: ['./verification-num.component.css']
})
export class VerificationNumComponent implements OnInit {

  verificationObj = {email: "", securityNumber: ""}

  constructor(private route: ActivatedRoute, private router: Router, private verfNumSec: VerificationNumService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.verificationObj.email = params['email']; 
    });
  }

  onFormSubmit(data: any){
    this.verfNumSec.verfSecNum(this.verificationObj).subscribe(resp => {
      this.checking(resp);
    });
  }

  goNextPage(resp: {}){
    this.router.navigateByUrl(`/signup?email=${this.verificationObj.email}&status=${resp}`)
  } 

  checking(resp: {}){
    if(resp == "409"){
      this.showerror("Security code is wrong!");
            this.router.navigateByUrl(`/verPage?email=${this.verificationObj.email}&status=200`)
    } else {
      this.showSuccess("Success!");
      this.goNextPage(resp);
    }
  }
  
  showSuccess(e: string | undefined) {
    this.toastr.success(e);
  }

  showerror(e: string | undefined) {
    this.toastr.error(e);
  }

}
