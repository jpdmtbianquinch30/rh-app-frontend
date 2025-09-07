import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent {
  // Variables pour le dashboard
  usersCount = 120;
  departmentsCount = 8;
  tasksCount = 45;
}
