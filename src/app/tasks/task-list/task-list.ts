import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.api.getTasks().subscribe((res: Task[]) => {
      this.tasks = res;
    });
  }
}
