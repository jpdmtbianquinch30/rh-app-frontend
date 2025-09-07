import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list';
import { DepartmentFormComponent } from './department-form/department-form';

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'add', component: DepartmentFormComponent },
  { path: 'edit/:id', component: DepartmentFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
