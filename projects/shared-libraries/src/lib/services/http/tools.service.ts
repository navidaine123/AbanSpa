

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalEnvironment } from 'projects/shared-libraries/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }
  apiUrl = globalEnvironment.apiUrl;

  public getSnapShot(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tools`, { responseType: 'text' });
  }
}
