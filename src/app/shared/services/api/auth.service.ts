import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mockUser = {
    username: 'admin',
    password: 'admin',
    token: 'token-123456789'
  };

  constructor(private router: Router) {
  }

  login(username: string | null | undefined, password: string | null | undefined): boolean {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      localStorage.setItem('currentUser', JSON.stringify({ username, token: this.mockUser.token }));
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }
}
