import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAdminprofService {

  private baseURL = "http://localhost:9000/getadminprof";

  constructor(private httpClient: HttpClient) { }

  getProfileUser(admin: {}):Observable<{}>{
    return this.httpClient.post<{}>(`${this.baseURL}`, admin)
    
  }
}
