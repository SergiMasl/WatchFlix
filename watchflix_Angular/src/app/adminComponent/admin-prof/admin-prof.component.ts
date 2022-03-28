import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Admin';
import { AdminService } from 'src/app/serviceAdmin/admin.service';

@Component({
  selector: 'app-admin-prof',
  templateUrl: './admin-prof.component.html',
  styleUrls: ['./admin-prof.component.css']
})
export class AdminProfComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  adminUSername:string | null = "";
  admins = {adminEmail: "", adminName: "", adminId: "", adminUsername: ""}
  
  ngOnInit(): void {
    this.getAdmin();
  }

  private getAdmin(){
    this.adminUSername = localStorage.getItem("adminUsername");
    this.adminService.getProfileAdmin(this.adminUSername || "").subscribe((resp) => {
      this.check(resp);
      
    })
 }

 check(resp: any){
  this.admins.adminId = resp.adminId;
    this.admins.adminEmail = resp.adminEmail;
    this.admins.adminName = resp.adminName;
    this.admins.adminUsername = resp.adminUsername;
 }
}
