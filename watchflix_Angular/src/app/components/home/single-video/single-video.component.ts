import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {
  @Input() post!: any;

  isVisible = false;

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor( private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
   }

  ngOnInit(): void {

  }

  
  readDescription(){
console.log(this.isVisible)
    this.isVisible = !this.isVisible
    console.log(this.isVisible)

  }

  addToMyList(){
    console.log("fff")
  }
}
