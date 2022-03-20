import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  @Input() display: boolean | undefined;
  @Input() displayLogo: boolean | undefined;
  @Input() displayLogoBack: boolean | undefined;
  

  constructor() { }

  ngOnInit(): void {
  }

}
