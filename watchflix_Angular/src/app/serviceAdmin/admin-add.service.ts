import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAddService {

  private baseURL = "http://localhost:9000/addAdmin";

  constructor(private httpClient: HttpClient) { }

  singUpAdmin(user: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, user)
  }
}