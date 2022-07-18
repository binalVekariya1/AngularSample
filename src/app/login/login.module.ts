import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared/shared-material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LoginComponent},
    ]),
  ]
})
export class LoginModule { }
