import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInServService {


  //DELETE
  private baseURL = "http://localhost:9000/loginuser";

  constructor(private httpClient: HttpClient) { }

  getLogIn(user: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, user)
  }
}
 