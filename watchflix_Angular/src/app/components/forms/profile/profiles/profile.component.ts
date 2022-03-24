import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  param = "";
  isDisplay = false;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.param = params['status']; 
      console.log(this.isDisplay)
      if(this.param == "update"){
        console.log(this.isDisplay)
        this.isDisplay = true;
        console.log(this.isDisplay)

      }
    });
  }

}
