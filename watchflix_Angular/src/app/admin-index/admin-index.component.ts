import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogInService } from '../serviceAdmin/admin-log-in.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {
  admin = {username: "", password: ""}

  constructor(private router: Router, private adminServ: AdminLogInService, ) { }

  ngOnInit(): void {
  }

  onFormSubmit(data: any){
    //1. send {} and get req from backeng
    this.admin.username = data.username;
    this.admin.password = data.password;

  //  this.adminServ.getLogIn(this.admin).subscribe(data => this.checking(resp));
  }

  // checking(resp){
  //   if(resp == null){
  //     alert("Password or user name are wrong, try one more time!")
  //     this.router.navigateByUrl(`/signin`)
  //   } else {
      //2. add hero to
    // this.userServ.setHero(resp)
    //  this.goNextPage();
   // }
  // }

}
