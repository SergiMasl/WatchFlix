import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationNumService {

  private baseURL = "http://localhost:9000/verifnum/:email";

  constructor(private httpClient: HttpClient) { }

  verfSecNum(user: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, user)
    
  }
}
