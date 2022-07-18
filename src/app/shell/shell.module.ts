import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { SharedMaterialModule } from '../shared/shared-material.module';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
      { path: 'employee', loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule), canActivate: [AuthGuard] }
    ]
  }
]


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ShellModule { }
