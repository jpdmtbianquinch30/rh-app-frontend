import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<{token: string}> {
    // Simulation d'une connexion réussie pour le développement
    // Remplacez par l'appel API réel
    return of({ token: 'fake-jwt-token-' + Date.now() }).pipe(
      tap(res => {
        if(res.token) localStorage.setItem('token', res.token);
      })
    );
    
    // Décommentez cette ligne pour utiliser l'API réelle
    // return this.http.post<{token: string}>(`${this.baseUrl}/auth/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}