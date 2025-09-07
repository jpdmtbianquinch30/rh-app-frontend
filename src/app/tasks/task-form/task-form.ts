import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      assignedTo: ['', Validators.required],
      status: ['PENDING', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  submit() {
    if (this.taskForm.valid) {
      this.api.addTask(this.taskForm.value).subscribe(() => {
        alert('Task saved successfully!');
        this.taskForm.reset({ status: 'PENDING' });
      });
    }
  }
}
