import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {

  data;
  initially = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  afterClick() {
    console.log('afterClick');
    this.initially = !this.initially;
  }

  showTable() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.data = res;
      console.log('res :', this.data);
    });
  }
}