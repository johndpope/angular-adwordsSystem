import { Injectable } from '@angular/core';
import { AuthServiceService } from 'app/auth-service/auth-service.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuardService implements CanActivate {
  constructor(public auth: AuthServiceService, private router: Router,) {}

  canActivate(): boolean {
    const currentUser = this.auth.isAuthenticated();
    if (!currentUser) {
        return true;
    }
    this.router.navigate(['/dashboard']);
  }
}
