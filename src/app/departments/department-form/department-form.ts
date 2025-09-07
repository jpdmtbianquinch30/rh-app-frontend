import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.html',
  styleUrls: ['./department-form.css']
})
export class DepartmentFormComponent implements OnInit {
  departmentForm!: FormGroup;
  isEdit = false;
  departmentId!: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.departmentId = +params['id'];
        // Ici vous pouvez charger le département depuis le service
      }
    });
  }

  submit(): void {
    if (this.departmentForm.invalid) return;
    if (this.isEdit) {
      console.log('Modifier le département', this.departmentForm.value);
    } else {
      console.log('Ajouter un département', this.departmentForm.value);
    }
    this.router.navigate(['/departments']);
  }
}
