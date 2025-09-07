import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing-module';
import { EmployeeDashboardComponent } from './employee-dashboard';

@NgModule({
  declarations: [EmployeeDashboardComponent],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule
  ]
})
export class EmployeeDashboardModule { }
