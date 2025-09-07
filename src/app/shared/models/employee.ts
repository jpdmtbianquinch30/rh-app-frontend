export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  departmentId: number;
  role: 'ADMIN' | 'MANAGER' | 'EMPLOYEE';
}
