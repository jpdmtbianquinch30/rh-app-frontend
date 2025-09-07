import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <nav class="navbar" *ngIf="showNavbar">
        <div class="nav-brand">
          <h2>RH Management</h2>
        </div>
        <div class="nav-links">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/employees" routerLinkActive="active">Employés</a>
          <a routerLink="/departments" routerLinkActive="active">Départements</a>
          <a routerLink="/tasks" routerLinkActive="active">Tâches</a>
          <button (click)="logout()" class="logout-btn">Déconnexion</button>
        </div>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    .navbar {
      background-color: #2c3e50;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .nav-brand h2 {
      margin: 0;
      color: #ecf0f1;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .nav-links a {
      color: #bdc3c7;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s;
    }
    .nav-links a:hover,
    .nav-links a.active {
      background-color: #34495e;
      color: white;
    }
    .logout-btn {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .logout-btn:hover {
      background-color: #c0392b;
    }
    .main-content {
      min-height: calc(100vh - 80px);
    }
  `]
})
export class AppComponent {
  title = 'rh-app-frontend';

  get showNavbar(): boolean {
    return !window.location.pathname.includes('/auth');
  }

  logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  }
}