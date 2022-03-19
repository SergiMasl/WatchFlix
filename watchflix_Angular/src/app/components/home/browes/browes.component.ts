import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-browes',
  templateUrl: './browes.component.html',
  styleUrls: ['./browes.component.css']
})
export class BrowesComponent implements OnInit {

  isKids = false
  posts: any[] = [];

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor(private postService: PostService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { 

    this.sanitizer = sanitizer;
    this.postService.getPostVideoForAll().subscribe(data => {
      if(this.isKids){
        this.posts = data.filter(e => e.isKids == true)
      } else {
        this.posts = data
      } 
    })
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.isKids = params['isKids'];
      console.log(this.isKids); 
    }
  );
  }

  

}
