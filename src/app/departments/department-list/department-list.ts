import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Department {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.html',
  styleUrls: ['./department-list.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Exemple statique, à remplacer par un service
    this.departments = [
      { id: 1, name: 'Ressources Humaines', description: 'Gestion du personnel' },
      { id: 2, name: 'IT', description: 'Support et développement' },
      { id: 3, name: 'Finance', description: 'Gestion financière' }
    ];
  }

  addDepartment(): void {
    this.router.navigate(['/departments/add']);
  }

  editDepartment(id: number): void {
    this.router.navigate(['/departments/edit', id]);
  }

  deleteDepartment(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce département ?'))
