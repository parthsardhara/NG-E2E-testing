import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  public data;

  constructor(private http: HttpClient, private toastrService: ToastrService) { }

  ngOnInit(): void { }

  showTable() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      if (res) {
        this.toastrService.success('Get data successfully.');
        this.data = res;
      }
    });
  }

}
