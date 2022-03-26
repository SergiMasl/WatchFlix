import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';


@Injectable({
  providedIn: 'root'
})
export class ViewadminprofService {

  private baseURL = "http://localhost:9000/viewadminprof";

  constructor(private httpClient: HttpClient) { }

  getProf(user: {}):Observable<User>{
    return this.httpClient.post<User>(`${this.baseURL}`, user)
  }
}