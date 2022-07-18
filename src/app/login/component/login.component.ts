import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private readonly fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private readonly authservice: AuthService) { }

  ngOnInit(): void {
    this.initFormControl();
  }

  initFormControl() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', Validators.required]
    })

  }

  login() {
    if (this.loginForm.valid) {
      this.authservice.login(this.loginForm.value);
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/demo/home';// get return url from route parameters or default to '/'
      this.router.navigate([returnUrl]);
    } else {
      console.log('There is a problem with the form');
    }
  }

}
