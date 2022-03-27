import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Movie = {
  "id": string;
  "title": string;
  "year": string;
  "isKids": boolean;
  "views": string;
  "descripshins": string;
  "URL": string;
  "category": string;
}

type moviesObj = {content: string};

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }

  getPostVideoForAll(): Observable<moviesObj>{
    return this.http.get<moviesObj>("http://localhost:9000/greeting") 
  }

}
