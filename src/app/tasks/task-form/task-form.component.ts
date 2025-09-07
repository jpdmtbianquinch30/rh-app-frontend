import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) { }

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
      console.log('Task saved:', this.taskForm.value);
      alert('Task saved successfully!');
      this.router.navigate(['/tasks']);
    }
  }
}