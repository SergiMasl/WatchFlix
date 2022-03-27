import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Admin';
import { AdminService } from 'src/app/serviceAdmin/admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

    admins: Admin[] = [];
    constructor(private adminService: AdminService) { }
  
    ngOnInit(): void {
  
    }
  
  }
