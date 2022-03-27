import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/profile/user.service'; 
import { LogInServService } from 'src/app/service/profile/log-in-serv.service'; 
import { LocalUser } from 'src/app/service/profile/user.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
  providers: [UserService]
})
export class SignInFormComponent implements OnInit {

  
  constructor(private router: Router, private userServ: UserService, private logIn: LogInServService) {   }

  hero = {username: "", password: ""}

   

  ngOnInit(): void {
  }

  onFormSubmit(data: any){
    //1. send {} and get req from backeng
    this.hero.username = data.username;
    this.hero.password = data.password;
    this.logIn.getLogIn(this.hero).subscribe((resp:LocalUser) => this.checking(resp));
  }

  goNextPage() {
    this.router.navigateByUrl('/home');
  }

  checking(resp: LocalUser){
    if(resp == null){
      alert("Password or user name are wrong, try one more time!")
      this.router.navigateByUrl(`/signin`)
    } else {
      //2. add hero to
    this.userServ.setHero(resp)
     this.goNextPage();
    }
  }
}

//LogInServService