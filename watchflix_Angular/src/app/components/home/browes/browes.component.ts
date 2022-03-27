import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/profile/user.service';
import { Movie, PostService } from '../../../service/post.service';
import { FavorVideosService } from 'src/app/service/favor-videos.service';

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
  FavorVideosService: any;
  selectedCat: string = "All";

  getMovies(){
    this.postService.getPostVideoForAll().subscribe(data => {
      const movieObj = data.content
      const moviesList: Movie[] = JSON.parse(movieObj);

      if(this.isKids){
        this.filtredCategorys = this.catList.filter(cat => cat.isForKid == true)
        this.allPosts = moviesList.filter(e => e.isKids == true)
        this.onChooseCategory(this.selectedCat);

      } else {
        this.filtredCategorys = this.catList
        this.allPosts = moviesList
        this.filtredPosts = this.allPosts;
        this.onChooseCategory(this.selectedCat);
      } 
    })
  }

  constructor(private postService: PostService,  private router: Router, private route: ActivatedRoute , private userServ: UserService, private favList : FavorVideosService) {    
  }


  vid: string | null = "";
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.isKids = params['isKids']; 
      this.getMovies();
      this.vid = localStorage.getItem("username")
      this.getMyFavList();
    });
  }
  
  onChooseCategory(category: string){
    this.selectedCat = category;
    this.filterPosts(category) 
  }

  filterPosts(category: string){
    console.log(category)
    if(category == "All"){
      this.filtredPosts = this.allPosts
    }else if(category == "My List"){
      // console.log(this.allPosts)
      this.filtredPosts = this.allPosts.filter(i => {
        // console.log(i)
       return this.checkFaverVid(i);
      })
    } else {
      this.filtredPosts = this.allPosts.filter(i => i.category == category);

    }
  }

  favVidList: string[] = [];

  checkFaverVid(currentItem: Movie){
    console.log(this.favVidList)
    return this.favVidList.find(favItem => currentItem.id == favItem);
  }

  goBack(){
    this.router.navigateByUrl(`/home`)
  }



getFavVid(data: {status: string}){
    //1. strin => []

    this.favVidList = data.status.split(",")
    console.log(this.favVidList)
    //2. if id.post == [] -> true

  }

  getMyFavList(){
    this.favList.getMyFavVidList(this.vid  || "").subscribe((data: any) => this.getFavVid(data))
  }

  onFavClick(){
    this.favList.getMyFavVidList(this.vid  || "").subscribe((data: any) =>{ 
      this.getFavVid(data)
      this.filterPosts(this.selectedCat);
    })
  }

}
