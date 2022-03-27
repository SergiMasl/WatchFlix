import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAdminprofService {

  private baseURL = "http://localhost:9000/getadminprofile";

  constructor(private httpClient: HttpClient) { }

  getProfileUser(user: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, user)
}
}
