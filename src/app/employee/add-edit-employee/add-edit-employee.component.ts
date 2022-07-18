import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {

  title!: string;
  id!: string;
  isAddMode!: boolean;
  addEditForm!: FormGroup;
  actionLabel!: string;

  constructor(private readonly fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private readonly employeeService: EmployeeService,
    private readonly notifyService: NotificationService) { }

  ngOnInit(): void {

this.initVariable();
    this.initFormControl();

    if(!this.isAddMode){
this.getEmployeeById( +this.id);
    }
  }

  initVariable() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.title = this.isAddMode ? 'Add Employee' : 'Edit Employee';
    this.actionLabel = this.isAddMode ? "ADD" : "EDIT";
  }

  initFormControl() {
    this.addEditForm = this.fb.group({
      code:[''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  getEmployeeById(id:number){
    this.employeeService.getById(id)
    .subscribe(x =>{
      this.addEditForm.patchValue(x)
    });
  }

  onSubmit() {
    if (this.addEditForm.valid) {
      this.saveEmployee().subscribe((response:boolean) => {
        if(response){
          this.notifyService.success("Employee " + (this.isAddMode ? "added" : "updated") + " successfully");
          this.router.navigate(['/demo/employee'], {
            relativeTo: this.route,
          });
        }
        else{
          this.notifyService.error("Something went wrong");
        }
      })


    } else {
      console.log('There is a problem with the form');
    }
  }

  saveEmployee():Observable<boolean>{
    if(this.isAddMode){
      return this.employeeService.post(this.addEditForm.value);
    }
    else{
      return this.employeeService.patch(this.addEditForm.value);
    }
  }

}
