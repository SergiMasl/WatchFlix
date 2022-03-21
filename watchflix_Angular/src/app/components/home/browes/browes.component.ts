import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, PostService } from '../../../post.service';
 

@Component({
  selector: 'app-browes',
  templateUrl: './browes.component.html',
  styleUrls: ['./browes.component.css']
})
export class BrowesComponent implements OnInit {
  isKids = false
  allPosts: Movie[] = [];
  filtredPosts: Movie[] = [];
  catList = [{id:"All", label: "All Movies", isForKid: true},{id:"cartoon", label: "Cartoons", isForKid: true},{id:"horror", label: "Horror Movies", isForKid: false}, {id:"history", label: "History Movies", isForKid: false}, {id:"comedy", label: "Comedy Movies", isForKid: true}, {id:"fantasy", label: "Fantasy Movies", isForKid: true}, {id:"My List", label: "My List", isForKid: true}];
  filtredCategorys: any[] = [];

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor(private postService: PostService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { 
    this.sanitizer = sanitizer;
    this.postService.getPostVideoForAll().subscribe(data => {
      const movieObj = data.content
      const moviesList: Movie[] = JSON.parse(movieObj);

      if(this.isKids){
        this.filtredCategorys = this.catList.filter(cat => cat.isForKid == true)
        this.allPosts = moviesList.filter(e => e.isKids == true)
        this.filtredPosts = this.allPosts;

      } else {
        this.filtredCategorys = this.catList
        this.allPosts = moviesList
        this.filtredPosts = this.allPosts;
      } 
    })
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isKids = params['isKids']; 
    });
  }
  
  onChooseCategory(category: string){
    this.genForCategory(category) 
  }

  genForCategory(category: string){
    if(category != "All"){
      this.filtredPosts = this.allPosts.filter(i => i.category == category);
    } else {
      this.filtredPosts = this.allPosts
    }
  }
}
