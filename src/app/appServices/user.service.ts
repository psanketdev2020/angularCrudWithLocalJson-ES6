import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../views/users/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  fetUsers(): Observable<User> {
    return this.http.get<User>(this.url, { headers: this.header });
  }

  addUser(userData: User) {
    return this.http.post<User>(this.url, userData);
  }

  deleteUser(id: number) {
    return this.http.delete<User>(this.url + '/' + id);
  }

  updateUser(id: any, userData: User) {
    return this.http.put(this.url + '/' + id, userData);
  }
}
