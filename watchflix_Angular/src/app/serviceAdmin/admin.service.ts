import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Admin';
import { User } from '../User';
import { Users2 } from '../User2';

export type LocalAdmin = {
  //ADD MORE!!!!!
  
  adminEmail: string;
  adminUsername: string;
  adminPassword: string;
  adminName: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

  private baseURL = "http://localhost:9000/adminviewall";
  httpClient: any;

  constructor(private http: HttpClient) { } 

  getUsers(): Observable<Users2[]>{
    return this.http.get<Users2[]>(`${this.baseURL}`)
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

  
  getAdminbyId(id: number): Observable<Admin>{
    return this.http.get<Admin>(`${this.baseURL}/${id}`);
  }


  get getHero(){
    return {
     "adminUsername": localStorage.getItem("adminUsername"),
     "adminName": localStorage.getItem("adminName")
    }
 }

 setHero(hero: LocalAdmin){
   localStorage.setItem("username", `${hero.adminUsername}`)
 }
 

}
