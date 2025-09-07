import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string = 'ADMIN'; // Simulé - à récupérer du token JWT
  dashboardData: any = {};

  constructor() { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Simulation des données selon le rôle
    switch(this.userRole) {
      case 'ADMIN':
        this.dashboardData = {
          title: 'Tableau de bord Admin',
          cards: [
            { title: 'Utilisateurs', value: 120, color: '#3498db' },
            { title: 'Départements', value: 8, color: '#2ecc71' },
            { title: 'Tâches', value: 45, color: '#e74c3c' },
            { title: 'Projets', value: 12, color: '#f39c12' }
          ]
        };
        break;
      case 'MANAGER':
        this.dashboardData = {
          title: 'Tableau de bord Manager',
          cards: [
            { title: 'Employés Totals', value: 25, color: '#3498db' },
            { title: 'Projets Actifs', value: 12, color: '#2ecc71' },
            { title: 'Approbations en Attente', value: 7, color: '#e74c3c' }
          ]
        };
        break;
      case 'EMPLOYEE':
        this.dashboardData = {
          title: 'Tableau de bord Employé',
          cards: [
            { title: 'Tâches Assignées', value: 15, color: '#3498db' },
            { title: 'Tâches Complétées', value: 8, color: '#2ecc71' },
            { title: 'Échéances à venir', value: 5, color: '#e74c3c' }
          ]
        };
        break;
    }
  }
}