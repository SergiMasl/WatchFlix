import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalUser } from '../service/profile/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLogInService {

  private baseURL = "http://localhost:9000/loginuser";

  constructor(private httpClient: HttpClient) { }

  getLogIn(admin: {username: "", password: ""}):Observable<{username: "", password: ""}>{
    return this.httpClient.post<{username: "", password: ""}>(`${this.baseURL}`, admin)
  }
}
