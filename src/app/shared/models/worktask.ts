export interface WorkTask {
  id: number;
  title: string;
  description: string;
  assignedTo: number; // employee id
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  dueDate: string;
}
