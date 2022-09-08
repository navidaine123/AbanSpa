import { globalEnvironment } from 'projects/shared-libraries/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = globalEnvironment.apiUrl;
  constructor(private http: HttpClient) {
  }
  private getAllUserUrl = this.apiUrl + '/api/Users'
  getAllUser() {
    return this.http.get(this.getAllUserUrl);
  }
}
