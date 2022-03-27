import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService, LocalAdmin } from 'src/app/admin.service';
import { LogInServService } from 'src/app/service/log-in-serv.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
  providers: [AdminService]
})
export class SignInFormComponent implements OnInit {

  constructor(private router: Router, private adminServ: AdminService, private logIn: LogInServService) {   }

  hero = {adminUsername: "", adminPassword: ""}


  ngOnInit(): void {
  }


  onFormSubmit(data: any){
    //1. send {} and get req from backeng
    this.hero.adminUsername = data.username;
    this.hero.adminPassword = data.password;
    this.logIn.getLogIn(this.hero).subscribe((resp:LocalAdmin) => this.checking(resp));
  }

  goNextPage() {
    this.router.navigateByUrl('/adminhome');
  }

  checking(resp: LocalAdmin){
    if(resp == null){
      alert("Password or user name are wrong, try one more time!")
      this.router.navigateByUrl(`/signin`)
    } else {
      //2. add hero to
    this.adminServ.setHero(resp)
     this.goNextPage();
    }
  }
}
