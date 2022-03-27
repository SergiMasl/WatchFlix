import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FavorVideosService } from 'src/app/service/favor-videos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.css']
})
export class SingleVideoComponent implements OnInit {
  @Input() post!: any;
  @Output() choosed = new EventEmitter<string>();


  isVisible = false;

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor( private sanitizer: DomSanitizer, private postFav: FavorVideosService, private toastr: ToastrService) {
    this.sanitizer = sanitizer;
   }
   username: string | null = "";

  ngOnInit(): void {

  }

  
  readDescription(){
    this.isVisible = !this.isVisible
  }

  addToMyList(e: any){
    this.username = localStorage.getItem("username")
    this.postFav.addToFav(e, this.username || "").subscribe(resp => this.checking(resp));
    
  }

  checking(resp: {status: string}){
    if(resp.status == "add"){
      this.choosed.emit();
      this.showSuccess("Video was added");
    } 
    if (resp.status == "remove"){
      this.choosed.emit();
      this.showSuccess("Video was Removed");
    }
  }

  showSuccess(e: string | undefined) {
    this.toastr.success(e);
  }
}
