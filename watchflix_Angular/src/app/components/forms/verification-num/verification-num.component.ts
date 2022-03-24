import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerificationNumService } from 'src/app/service/verification-num.service';

@Component({
  selector: 'app-verification-num',
  templateUrl: './verification-num.component.html',
  styleUrls: ['./verification-num.component.css']
})
export class VerificationNumComponent implements OnInit {

  verificationObj = {email: "", securityNumber: ""}

  constructor(private route: ActivatedRoute, private router: Router, private verfNumSec: VerificationNumService) { }

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
      alert("Code is not matche... try one more time!")
      this.router.navigateByUrl(`/verPage?email=${this.verificationObj.email}&status=200`)
    } else {
      this.goNextPage(resp);
    }
  }

}
