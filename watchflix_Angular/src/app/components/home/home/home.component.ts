import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
// import { Hero } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})

export class HomeComponent implements OnInit {
  user = {u_name: localStorage.getItem("name"), u_k_name: ""}


  constructor(private router: Router,  private userServ: UserService) {
    userServ.getHero
   }

  ngOnInit(): void {
    if(!localStorage.getItem('username')){
      this.router.navigateByUrl(`/main`)

    }
  }

  onClickAdult(){
    this.router.navigateByUrl(`/browes?u_name=${this.user.u_name}`);
    return false;
  }
  onClickKid(){
    this.router.navigateByUrl(`browes/${this.user.u_name}?isKids=true`);
    return false;
  }
}
