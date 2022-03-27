import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavorVideosService {


  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:9000/addVideo";

  addToFav(id: string, username: string): Observable<any>{
    
    const video = {id: id, username: username}
    return this.http.post<any>(`${this.baseURL}`, video)
  }


  private baseURL2 = "http://localhost:9000/getFavVidList";

  getMyFavVidList(username:string): Observable<string>{
    
    const list = {username: username}
    return this.http.post<string>(`${this.baseURL2}`, list)
  }

}
 