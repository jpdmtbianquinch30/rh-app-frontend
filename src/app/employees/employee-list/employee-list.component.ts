import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.employees = [
      { id: 1, name: 'Alice Smith', email: 'alice@example.com', position: 'Developer', department: 'IT' },
      { id: 2, name: 'Bob Johnson', email: 'bob@example.com', position: 'Accountant', department: 'Finance' }
    ];
  }

  addEmployee(): void {
    this.router.navigate(['/employees/add']);
  }

  editEmployee(id: number): void {
    this.router.navigate(['/employees/edit', id]);
  }

  deleteEmployee(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
      this.employees = this.employees.filter(emp => emp.id !== id);
    }
  }
}