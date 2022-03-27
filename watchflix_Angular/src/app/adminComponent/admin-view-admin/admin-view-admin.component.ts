import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Admin';
import { AdminService } from 'src/app/serviceAdmin/admin.service';

@Component({
  selector: 'app-admin-view-admin',
  templateUrl: './admin-view-admin.component.html',
  styleUrls: ['./admin-view-admin.component.css']
})
export class AdminViewAdminComponent implements OnInit {

  admins: Admin[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((response: Admin[]) =>{
      console.log(response);
      this.admins = response;
    });
  }

}