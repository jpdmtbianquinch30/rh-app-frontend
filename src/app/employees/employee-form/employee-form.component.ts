import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  id: number | null = null;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      // récupérer les infos de l'employé par id via un service
      this.employeeForm.patchValue({
        name: 'John Doe',
        email: 'john.doe@example.com',
        position: 'Manager',
        department: 'IT'
      });
    }
  }

  submit(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.router.navigate(['/employees']);
    }
  }
}