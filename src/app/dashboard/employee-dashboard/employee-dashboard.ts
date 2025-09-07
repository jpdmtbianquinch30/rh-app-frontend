import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.html',
  styleUrls: ['./employee-dashboard.css']
})
export class EmployeeDashboardComponent {
  tasksAssigned = 15;
  tasksCompleted = 8;
  upcomingDeadlines = 5;
}
