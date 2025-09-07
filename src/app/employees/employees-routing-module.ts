import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form';
import { EmployeeListComponent } from './employee-list/employee-list';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
