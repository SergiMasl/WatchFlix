import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/serviceAdmin/admin.service';
import { Users2 } from 'src/app/User2';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {

  users2: Users2[] = [];
  
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

private getUsers(){
   this.adminService.getUsers().subscribe((response: Users2[]) =>{
    console.log(response);
    this.users2 = response;
  });
}

  deleteUserview(id: number){
    this.adminService.deleteUserview(id).subscribe(data=>{
      alert("User was deleted!")
      this.getUsers();
    });
  }

  updateUserview(id: number){
    this.router.navigate(['adminupdate',id]);
    }
  
  }