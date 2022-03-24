import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalUser } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LogInServService {


  //DELETE
  private baseURL = "http://localhost:9000/loginuser";

  constructor(private httpClient: HttpClient) { }

  getLogIn(user: {}):Observable<LocalUser>{
    return this.httpClient.post<LocalUser>(`${this.baseURL}`, user)
  }
}
 