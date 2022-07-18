import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss']
})
export class EmployeeGridComponent {

  employees!: Observable<Employee[]>;
  displayedColumns: string[] = ['name', 'email','action'];

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly notifyService: NotificationService) { }

  ngOnInit() {
    this.getEmployees();
  }
  
  refresh(){
    this.getEmployees();
  }

  getEmployees() {
    this.employees= this.employeeService.getAll();
  }

  delete(employee:Employee){
    this.employeeService.delete(employee.code);
    this.notifyService.success("Employee deleted successfully");
    this.getEmployees();

  }

}
