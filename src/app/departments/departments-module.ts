import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRoutingModule } from './departments-routing-module';
import { DepartmentListComponent } from './department-list/department-list';
import { DepartmentFormComponent } from './department-form/department-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
