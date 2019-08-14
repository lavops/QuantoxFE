import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient,
    private Token: TokenService
  ) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  getProfile() {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/profile`, {
      headers: header
    });
  }

  postTweet(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/postTweet`, data, {
      headers: header
    });
  }

  getSettingsData() {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/settingsData`, {
      headers: header
    });
  }

  updateProfile(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/updateProfile`, data, {
      headers: header
    });
  }

}
