import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  data;

  constructor(private modalService: BsModalService, private http: HttpClient) { }

  openModal(template: TemplateRef<any>) {
    console.log('template :', template);
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.data = res;
      console.log('res :', this.data);
    });
  }
}
