import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  public sum: number;
  public isAdditionFormSubmited: boolean = false;
  public additionForm = new FormGroup({
    num1: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    num2: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  });

  constructor(private modalService: BsModalService, private http: HttpClient) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void { }

  additionFormSubmit() {
    this.isAdditionFormSubmited = true;
    if (this.additionForm.valid) {
      this.sum = parseInt(this.additionForm.controls.num1.value) + parseInt(this.additionForm.controls.num2.value);
    }
  }
}
