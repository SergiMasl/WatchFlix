import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  countries = ['USA', 'China', 'UAE', 'Japan']
  userModel  = new User('', 'm@gmail.com', 1, '', '', false)

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(data: any){
    //send to java
    
  }

}
