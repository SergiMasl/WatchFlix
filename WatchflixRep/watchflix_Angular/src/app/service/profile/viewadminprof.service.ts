import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Admin';
import { User } from 'src/app/User';


@Injectable({
  providedIn: 'root'
})
export class ViewadminprofService {

  private baseURL = "http://localhost:9000/viewadminprof";

  constructor(private httpClient: HttpClient) { }

  getProf(admin: {}):Observable<Admin>{
    return this.httpClient.post<Admin>(`${this.baseURL}`, admin)
  }
}