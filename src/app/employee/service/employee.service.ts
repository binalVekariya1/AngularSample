import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators'
import { Environment } from 'src/app/shared/model/environment.model';
import { ENVIRONMENT } from 'src/app/shared/model/environment.token';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly apiUrl = `${this.env.apiUrl}/Employees`;

  _employeeList: Employee[];

  constructor(@Inject(ENVIRONMENT) private env: Environment, private http: HttpClient) {

    this._employeeList = [{ code: 1, name: 'Romin', email: 'romin.k.irani@gmail.com' },
    { code: 2, name: 'Neil', email: 'neilrirani@gmail.com' },
    { code: 3, name: 'Tom', email: 'tomhanks@gmail.com' }]

  }

  getAll(): Observable<Employee[]> {
    return of(this._employeeList);
  }

  getById(code: number): Observable<Employee | Employee[]> {
    return of(this._employeeList.filter(e => e.code == code)[0]);
  }


  post(employee: Employee): Observable<boolean> {
    const maxCode = Math.max(...this._employeeList.map(o => o.code));
    employee.code = maxCode + 1;
    this._employeeList.push(employee);
    return of(true);//TODO:BINAL Based on http request set true false
  }

  patch(employee: Employee): Observable<boolean> {
    const index = this._employeeList.findIndex(e => e.code == employee.code);
    this._employeeList[index].name = employee.name;
    this._employeeList[index].email = employee.email;

    return of(true);//TODO:BINAL Based on http request set true false
  }

  delete(code: number) {
    this._employeeList.splice(this._employeeList.findIndex(e => e.code == code), 1);
  }

}
