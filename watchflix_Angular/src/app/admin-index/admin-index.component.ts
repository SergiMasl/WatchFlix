import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogInService } from '../serviceAdmin/admin-log-in.service';
import { LocalAdmin } from '../serviceAdmin/admin.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {
  admin = {adminUsername: "", adminPassword: ""}

  constructor(private router: Router, private adminServ: AdminLogInService, ) { }

  ngOnInit(): void {
  }

  onFormSubmit(data: any){
    this.admin.adminUsername = data.adminUsername;
    this.admin.adminPassword = data.adminPassword;
   this.adminServ.getLogIn(this.admin).subscribe((resp: LocalAdmin) => this.checking(resp));
  }

  checking(resp: LocalAdmin){
    if(resp == null){
      alert("Password or user name are wrong, try one more time!")
      this.router.navigateByUrl(`/signin`)
    } else {
      alert("Success!")
      localStorage.setItem("adminUsername", this.admin.adminUsername)
      this.router.navigateByUrl(`/adminoptions`)
   }
  }

}
