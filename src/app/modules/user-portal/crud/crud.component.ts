import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  modalRef: BsModalRef;
  public isEditCrudDataFormSubmited: boolean = false;

  public crudData = [
    { id: 1, name: 'Parth', company: 'Bacancy' },
    { id: 2, name: 'Vishal', company: 'Bacancy' },
    { id: 3, name: 'Ravi', company: 'Bacancy' },
    { id: 4, name: 'Arjun', company: 'Bacancy' },
    { id: 5, name: 'Ram', company: 'Bacancy' },
  ];
  public editCrudDataForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
  });

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  openEditCrudDataModal(template: TemplateRef<any>, product) {
    this.modalRef = this.modalService.show(template);
    this.editCrudDataForm.setValue({ id: product.id, name: product.name, company: product.company });
  }

  editCrudDataModalHide() {
    this.modalRef.hide();
    this.editCrudDataForm.reset();
  }

  deleteCrudData(product) {
    this.crudData.forEach((element, index) => {
      if (element.id === product.id) {
        this.crudData.splice(index, 1);
      }
    });
  }

  editCrudDataFormSubmit() {
    this.isEditCrudDataFormSubmited = true;
    if (this.editCrudDataForm.valid) {
      if (this.editCrudDataForm.get('id').value) {
        this.crudData.forEach(element => {
          if (element.id === this.editCrudDataForm.get('id').value) {
            element.name = this.editCrudDataForm.get('name').value;
            element.company = this.editCrudDataForm.get('company').value;
            this.editCrudDataModalHide();
          }
        });
      } else {
        this.crudData.push({ id: this.crudData.length + 1, name: this.editCrudDataForm.get('name').value, company: this.editCrudDataForm.get('company').value });
        this.editCrudDataModalHide();
      }
    }
  }

  addEmployee(template) {
    this.modalRef = this.modalService.show(template);
  }
}
