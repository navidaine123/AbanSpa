
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalEnvironment } from 'projects/shared-libraries/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = globalEnvironment.apiUrl;

  public login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, data, { responseType: 'text' });
  }
}
