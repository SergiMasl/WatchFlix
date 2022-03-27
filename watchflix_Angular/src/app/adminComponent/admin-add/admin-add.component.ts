import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAddService } from 'src/app/serviceAdmin/admin-add.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
newAdmin = {adminName: "", adminUsername: "", adminEmail: "", adminPassword: ""}
  constructor(private addAdmin: AdminAddService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  onFormSubmit(data: any){
    this.newAdmin.adminName = data.name
    this.newAdmin.adminUsername = data.username
    this.newAdmin.adminEmail = data.email
    this.newAdmin.adminPassword = data.password
    this.addAdmin.singUpAdmin(this.newAdmin).subscribe(resp => {
      this.checking(resp);
    })
  }

  checking(resp: any){
    if(resp.status == "Error"){
      alert("Something wrong")
    } 
    if(resp.status == "Success"){
      alert("Success") 
    }
    this.router.navigateByUrl(`/adminhome`)
  }
}
