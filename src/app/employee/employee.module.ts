import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeGridComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: EmployeeGridComponent},
      {path: 'add',  component: AddEditEmployeeComponent},
      { path: 'edit/:id', component: AddEditEmployeeComponent }
    ]),
    // StoreModule.forRoot({ employees: employeesReducer, }),
    //StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.reducer)
  ],
  exports:[EmployeeGridComponent]
})
export class EmployeeModule { }
