import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  public sum: number;
  public initially = true;

  public isAdditionFormSubmited: boolean = false;
  public additionForm = new FormGroup({
    num1: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    num2: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  });

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modalRefHide() {
    this.modalRef.hide();
    this.additionForm.reset();
    this.sum = null;
  }

  ngOnInit(): void { }

  additionFormSubmit() {
    this.isAdditionFormSubmited = true;
    if (this.additionForm.valid) {
      this.sum = parseInt(this.additionForm.controls.num1.value) + parseInt(this.additionForm.controls.num2.value);
    }
  }

  afterClick() {
    console.log('afterClick');
    this.initially = !this.initially;
  }

}
