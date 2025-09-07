import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.spec';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(credentials: { username: string; password: string }) {
    return this.api.post<any>('auth/login', credentials)
      .pipe(
        tap(res => {
          if(res.token) localStorage.setItem('token', res.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
