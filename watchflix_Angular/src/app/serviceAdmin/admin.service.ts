import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Admin';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  private baseURL = "http://localhost:9000/adminviewall";
  httpClient: any;

  constructor(private http: HttpClient) { } 

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`)
  }

  deleteUserview(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  private baseURL2 = "http://localhost:9000/showadmin";
  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${this.baseURL2}`)
  }


  getUserbyId(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`);
    
  }

 

}
