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

  getUserInfo(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/user/${data}`, {
      headers: header
    });
  }

  getUser(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/userID/${data}`, {
      headers: header
    });
  }

  addFried(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/addFriend`, data, {
      headers: header
    });
  }

  deleteFriend(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/deleteFriend`, data, {
      headers: header
    });
  }

  getComments(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/tweet/${data}`, {
      headers: header
    });
  }

  postComment(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/postComment`, data, {
      headers: header
    });
  }

  likeTweet(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/likeTweet`, data, {
      headers: header
    });
  }

  unlikeTweet(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/unlikeTweet`, data, {
      headers: header
    });
  }

  getLikes(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/getLikes/${data}`, {
      headers: header
    });
  }

  deleteTweet(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/deleteTweet`, data, {
      headers: header
    });
  }

  deleteComment(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/deleteComment`, data, {
      headers: header
    });
  }

  getTweets() {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/getTweets`, {
      headers: header
    });
  }

  getFollowNotify() {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/getFollowNotify`, {
      headers: header
    });
  }

  acceptFollow(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/acceptFollow`, data, {
      headers: header
    });
  }

  declineFollow(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/declineFollow`, data, {
      headers: header
    });
  }

  dismissFollow(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.post(`${this.baseUrl}/dismissFollow`, data, {
      headers: header
    });
  }

  getLikeNotify() {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/getLikeNotify`, {
      headers: header
    });
  }

  searchUsers(data) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.Token.get()
    });
    return this.http.get(`${this.baseUrl}/search/${data}`, {
      headers: header
    });
  }
}
