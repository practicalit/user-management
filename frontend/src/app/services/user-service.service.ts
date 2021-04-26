import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public save(user: {firstname,lastname, username, password}): Observable<any> {
    return this.http.post<any>(environment.apiUrl + environment.createUser, user);
  }

  public update(user: {firstname,lastname, username, active, loggedIn}): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}${environment.createUser}/${user.username}`, user);
  }

  public list(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + environment.createUser);
  }
}
