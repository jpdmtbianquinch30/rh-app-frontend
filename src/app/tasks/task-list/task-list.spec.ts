import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list';
import { of } from 'rxjs';
import { ApiService } from '../../shared/services/api';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let apiServiceStub: Partial<ApiService>;

  apiServiceStub = {
    getTasks: () => of([
      { id: 1, title: 'Task 1', description: 'Desc 1', assignedTo: 1, status: 'PENDING', dueDate: '2025-09-10' }
    ])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      providers: [{ provide: ApiService, useValue: apiServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks', () => {
    expect(component.tasks.length).toBe(1);
  });
});
