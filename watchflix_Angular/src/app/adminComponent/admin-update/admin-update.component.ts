import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/serviceAdmin/admin.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {


  // id!: number;
  // countries = ['USA', 'China', 'UAE', 'Japan']
  // email = "";
  // status= "";
 // userModel  = new User('', this.email, '', '','', false, "", false, "");
  constructor(private adminService: AdminService, 
    private route: ActivatedRoute) { }

    router: any;

  ngOnInit(): void {
    // this.userModel = new User('', this.email, '', '','', false, "", false, "");
    // this.id = this.route.snapshot.params['id'];
    // this.adminService.getUserbyId(this.id).subscribe(data =>{
    //   this.userModel = data;
    //}, error => (console.log));
  }



  onFormUpdate(data: any){
    // console.log(data)
    // this.router.navigateByUrl('/adminupdate');
  }

}