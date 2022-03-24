import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpServiceService } from 'src/app/sign-up-service.service';
import { User } from 'src/app/User'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  countries = ['USA', 'China', 'UAE', 'Japan']
  email = "";
  status= "";
  userModel  = new User('', this.email, 1, '', '', false, '')

  constructor(private route: ActivatedRoute, private router: Router, private signUpServis: SignUpServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userModel.email = params['email']; 
    });
  }
  onFormSubmit(data: any){
    this.signUpServis.singUpUser(this.userModel).subscribe(resp => {
      this.checking(resp);
    })
  }

  checking(resp: {}){
    if(resp == "200"){
          alert("Sign Up Success")
          this.router.navigateByUrl(`/main`)
        } else {
          alert("Username or phone already used... try other")
          this.router.navigateByUrl(`/signup?email=${this.userModel.email}&status=200`)
        }
      }

} 
