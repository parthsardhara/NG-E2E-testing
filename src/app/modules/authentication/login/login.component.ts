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
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  public isLoginFormSubmited: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  loginFormSubmit() {
    this.isLoginFormSubmited = true;
    if (this.loginForm.get('username').value === 'admin' && this.loginForm.get('password').value === 'admin') {
      localStorage.setItem('username', this.loginForm.get('username').value);
      localStorage.setItem('password', this.loginForm.get('password').value);
      this.loginForm.reset();
      this.router.navigate(['user-portal', 'home']);
    }
  }
}
