import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
   } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {
constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              State: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
return this.authService.isAuthenticated()
    .then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    );
    }
}
