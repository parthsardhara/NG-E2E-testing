import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
  });

  public isLoginFormSubmited:boolean = false;
  constructor() { }

  ngOnInit(): void { }

  registrationFormSubmit() {
    this.isLoginFormSubmited = true;
    console.log('loginFormSubmit.value :', this.registrationForm.value);
  }
}
