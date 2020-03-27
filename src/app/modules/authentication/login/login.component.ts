import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  });

  public isLoginFormSubmited: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  loginFormSubmit() {
    this.isLoginFormSubmited = true;
    if (this.loginForm.valid) {
      localStorage.setItem('email', this.loginForm.get('email').value);
      localStorage.setItem('password', this.loginForm.get('password').value);
      this.loginForm.reset();
      this.router.navigate(['/user-portal', 'home']);
    }
  }
}
