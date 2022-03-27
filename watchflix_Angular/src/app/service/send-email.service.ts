import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private baseURL = "http://localhost:9000/sendEmail";

  constructor(private httpClient: HttpClient) { }

  postEmail(email: string):Observable<string>{
    return this.httpClient.post<string>(`${this.baseURL}`, email)
    
  }

}

