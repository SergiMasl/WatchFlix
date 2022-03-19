import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Movie = {
  "title": string;
  "year": string;
  "isKids": boolean;
  "views": string;
  "descripshins": string;
  "URL": string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostVideoForAll(): Observable<Movie[]>{
   return this.http.get<any[]>('../assets/allVideosAPI.json') 
  }

  getPostVideoForKid(): Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts') 
  }
}
