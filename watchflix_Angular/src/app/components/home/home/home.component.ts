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
  user = {u_name: "ALex Posh", u_k_name: "Peter Porsh"}
  // hero: Hero = {email: "string",
  //   username: "string",
  //   name: "string",
  //   phone: "string",
  // } 

  constructor(private router: Router,  private userServ: UserService) {
    userServ.getHero
   }

  ngOnInit(): void {
  }


  onClickAdult(){
    this.router.navigateByUrl(`/browes?u_name=${this.user.u_name}`);
    return false;
  }
}
