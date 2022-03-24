import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.css']
})
export class VerificationPageComponent implements OnInit {

  dataObj = {email: "", errorStatus: ""}
  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.dataObj.email = params['email']; 
      this.dataObj.errorStatus = params['status']; 
    });
    

  }
  

  //step 1. - if errorStatus 408 => render main page with alert
  
  

 

}
