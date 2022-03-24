import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service'; 
import { LogInServService } from 'src/app/service/log-in-serv.service'; 

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
    console.log(this.hero)
    this.logIn.getLogIn(this.hero).subscribe(resp => this.checking(resp));
  }

  checking(resp: {}){
    console.log(resp)
    if(resp == null){
      alert("Password or user name are wrong, try one more time!")
      this.router.navigateByUrl(`/signin`)
    } else {
      //2. add hero to
    
    // this.userServ.setHero()

      this.router.navigateByUrl('/home');
    }
  }
}

//LogInServService