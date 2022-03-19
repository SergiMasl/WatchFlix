import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {u_name: "ALex Posh", u_k_name: "Peter Porsh"}
  
  constructor() { }

  ngOnInit(): void {
  }

}
