import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly userKey = 'ecommerce_user';
  private readonly credentialsKey = 'ecommerce_credentials';

  setUser(user: unknown): void {
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser<T>(): T | null {
    const value = sessionStorage.getItem(this.userKey);
    return value ? (JSON.parse(value) as T) : null;
  }

  setCredentials(email: string, password: string): void {
    sessionStorage.setItem(this.credentialsKey, btoa(`${email}:${password}`));
  }

  getCredentials(): string | null {
    return sessionStorage.getItem(this.credentialsKey);
  }

  clear(): void {
    sessionStorage.removeItem(this.userKey);
    sessionStorage.removeItem(this.credentialsKey);
  }
}
