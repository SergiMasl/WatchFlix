import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';
import { LocalUser } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ViewprofService {

  private baseURL = "http://localhost:9000/viewprof";

  constructor(private httpClient: HttpClient) { }

  getProf(user: {}):Observable<User>{
    return this.httpClient.post<User>(`${this.baseURL}`, user)
  }
} 
