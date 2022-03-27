import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  private baseURL = "http://localhost:9000/signupuser";

  constructor(private httpClient: HttpClient) { }

  singUpUser(user: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, user)
    
  }
} 
 