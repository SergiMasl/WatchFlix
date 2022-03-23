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

  goNext(){
    this.router.navigateByUrl(`/signup?email=${this.verificationObj.email}`);
  }

  onFormSubmit(data: any){
    console.log(this.verificationObj)
    this.verfNumSec.verfSecNum(this.verificationObj).subscribe(data => this.goNext())
  }

}
