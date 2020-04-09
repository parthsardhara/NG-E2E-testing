import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z]{1}[a-zA-Z\@\#]{7,}[0-9]{4}$/),
      Validators.minLength(12),
      Validators.maxLength(12)
    ]),
    companyName: new FormControl('', [Validators.required]),
    male: new FormControl(true),
    female: new FormControl(false),
    // password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/)]),
  }, { updateOn: 'change' });

  public isLoginFormSubmited: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  checkboxSelected(e) {
    if (e.target.value === 'male') {
      this.registrationForm.controls.female.setValue(false);
    } else {
      this.registrationForm.controls.male.setValue(false);
    }
  }

  registrationFormSubmit() {
    this.isLoginFormSubmited = true;
    if (this.registrationForm.valid) {
      this.router.navigate(['login']);
      this.registrationForm.reset();
    }
  }

}
