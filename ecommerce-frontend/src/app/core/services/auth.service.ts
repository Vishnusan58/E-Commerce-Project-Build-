import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private storage: StorageService) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((user) => {
        this.storage.setCredentials(email, password);
        this.storage.setUser(user);
      })
    );
  }

  register(payload: { email: string; password: string; name: string; phone?: string; role?: string }): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, payload);
  }

  logout(): void {
    this.storage.clear();
  }

  getCurrentUser(): User | null {
    return this.storage.getUser<User>();
  }
}
