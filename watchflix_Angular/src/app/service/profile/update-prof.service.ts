import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';
import { LocalUser } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfService {

  private baseURL = "http://localhost:9000/updateprof";

  constructor(private httpClient: HttpClient) { }

  updateProf(user: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, user)
  }
  
}
 