import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Movie, PostService } from '../../../post.service';
 

@Component({
  selector: 'app-browes',
  templateUrl: './browes.component.html',
  styleUrls: ['./browes.component.css'],
  providers: [UserService]
})
export class BrowesComponent implements OnInit {
  isKids = false
  allPosts: Movie[] = [];
  filtredPosts: Movie[] = [];
  catList = [{id:"All", label: "All Movies", isForKid: true},{id:"cartoon", label: "Cartoons", isForKid: true},{id:"horror", label: "Horror Movies", isForKid: false}, {id:"history", label: "History Movies", isForKid: false}, {id:"comedy", label: "Comedy Movies", isForKid: true}, {id:"fantasy", label: "Fantasy Movies", isForKid: true}, {id:"My List", label: "My List", isForKid: true}];
  filtredCategorys: any[] = [];

  constructor(private postService: PostService,  private router: Router, private route: ActivatedRoute , private userServ: UserService) { 
    // this.userServ.loadAll;
  
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

  goBack(){
    this.router.navigateByUrl(`/home`)
  }

}
