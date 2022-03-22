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
  userModel  = new User('', this.email, 1, '', '', false)

  constructor(private route: ActivatedRoute, private router: Router, private signUpServis: SignUpServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userModel.email = params['email']; 
    });
  }

  signUpUser(){
    this.signUpServis.singUpUser(this.userModel).subscribe(data => this.goHome())
    }


  goHome(){
    this.router.navigate(['/main'])
  }

  onFormSubmit(data: any){
    this.signUpUser();
    // this.router.navigateByUrl(`/signup?email=${this.email}`);
    
  }

}
