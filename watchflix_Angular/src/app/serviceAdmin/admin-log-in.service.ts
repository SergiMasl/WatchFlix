import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalAdmin } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLogInService {

  private baseURL = "http://localhost:9000/loginadmin";

  constructor(private httpClient: HttpClient) { }

  getLogIn(admin: {}):Observable<LocalAdmin>{
    console.log(admin)
    return this.httpClient.post<LocalAdmin>(`${this.baseURL}`, admin)
  }


}
 