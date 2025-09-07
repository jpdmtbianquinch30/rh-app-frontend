import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Employee } from '../models/employee';
import { Department } from '../models/department';
import { WorkTask } from '../models/worktask';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Auth
  login(credentials: {username: string, password: string}): Observable<{token: string}> {
    // Simulation pour le développement
    return of({ token: 'fake-jwt-token-' + Date.now() });
    // return this.http.post<{token: string}>(`${this.baseUrl}/auth/login`, credentials);
  }

  // Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  // Employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, employee);
  }

  // Departments
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/departments`);
  }

  addDepartment(dept: Department): Observable<Department> {
    return this.http.post<Department>(`${this.baseUrl}/departments`, dept);
  }

  // Tasks
  getTasks(): Observable<WorkTask[]> {
    return this.http.get<WorkTask[]>(`${this.baseUrl}/tasks`);
  }

  addTask(task: WorkTask): Observable<WorkTask> {
    return this.http.post<WorkTask>(`${this.baseUrl}/tasks`, task);
  }
  
  // Token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}