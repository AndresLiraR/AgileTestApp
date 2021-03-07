import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  apiUrlAuth = 'http://interview.agileengine.com/auth';
  token = { apiKey: '23567b218376f79d9415' };

  constructor(private http: HttpClient) {}

  /**
   * Method used to get Authentication token
   * @returns object with token
   */
  authenticateUser() {
    const apiURL = `${this.apiUrlAuth}`;
    return this.http.post(apiURL, this.token);
  }
}
