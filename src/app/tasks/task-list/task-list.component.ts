import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  dueDate: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    // Simulation de données
    this.tasks = [
      { id: 1, title: 'Développer API', description: 'Créer l\'API REST', assignedTo: 1, status: 'IN_PROGRESS', dueDate: '2025-02-15' },
      { id: 2, title: 'Tests unitaires', description: 'Écrire les tests', assignedTo: 2, status: 'PENDING', dueDate: '2025-02-20' }
    ];
  }

  addTask(): void {
    this.router.navigate(['/tasks/add']);
  }

  editTask(id: number): void {
    this.router.navigate(['/tasks/edit', id]);
  }

  deleteTask(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
}