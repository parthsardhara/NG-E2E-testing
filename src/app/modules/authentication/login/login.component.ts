import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export class Login {
  constructor(
    // public firstName: string = '',
    // public lastName: string = '',
    public email: string = '',
    public password: string = '') {
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: Login = new Login();
  @ViewChild('f') form: any;

  // For reactive form creation
  // public loginForm = new FormGroup({
  //   email: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  //   ]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  // });

  // For reactive variable
  // public isLoginFormSubmited: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  onTemplateSubmit() {
    if (this.form.valid) {
      localStorage.setItem('email', this.form.value.email);
      localStorage.setItem('password', this.form.value.password);
      this.form.reset();
      this.router.navigate(['/user-portal', 'home']);
    }
  }

  // For reactive form submit method
  // loginFormSubmit() {
  //   this.isLoginFormSubmited = true;
  //   if (this.loginForm.valid) {
  //     localStorage.setItem('email', this.loginForm.get('email').value);
  //     localStorage.setItem('password', this.loginForm.get('password').value);
  //     this.loginForm.reset();
  //     this.router.navigate(['/user-portal', 'home']);
  //   }
  // }
}
