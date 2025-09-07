import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.html',
  styleUrls: ['./manager-dashboard.css']
})
export class ManagerDashboardComponent {
  totalEmployees = 25;
  activeProjects = 12;
  pendingApprovals = 7;
}
