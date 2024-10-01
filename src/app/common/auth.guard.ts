import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map((user) => !!user), // Return true if user exists
      tap((loggedIn) => {
        if (!loggedIn) {
          console.log('Access denied. Login to continue.');
          this.router.navigate(['/sign-in']);
        }
      })
    );
  }
}
