import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request: HttpClient) {}

  ngOnInit(): void {
    this.getRequest();
  }

  getRequest(): void {
    this.request.get('http://cvillegas-dev.com:9191/api/v1/server').subscribe(
      resp => {
        console.log(resp);
      }
    );
  }

}
