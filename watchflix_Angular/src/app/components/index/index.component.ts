import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendEmailService } from 'src/app/send-email.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  email!: string;
  constructor(private router: Router, private emailService: SendEmailService) { }

  ngOnInit(): void {
  }

  postEmail(){
    this.emailService.postEmail(this.email).subscribe(data=>this.goHome)
  }
  
  goHome(){
    this.router.navigate(['/main'])
  }

  onFormSignUp(data: any){
    this.email = data.email;
    console.log(this.email)
    this.postEmail();
    this.router.navigateByUrl(`/signup?email=${this.email}`);
  }

}
