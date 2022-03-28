import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
 
  param = "";
  isDisplay = false;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params['status']; 
      if(this.param == "update"){
        this.isDisplay = true;

      }
    });
  }
  goBack(){
    this.router.navigateByUrl(`/adminhome`)
  }

}
