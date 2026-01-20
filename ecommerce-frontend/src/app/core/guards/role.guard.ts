import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.storage.getUser<User>();
    const requiredRole = route.data['role'] as string;
    if (!user || user.role !== requiredRole) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
