import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubApiService } from 'src/app/services/github-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private request: HttpClient,
    private github: GithubApiService
    ) {}

  ngOnInit(): void {
    this.getRequest();
  }

  getRequest(): void {
    this.request.get('http://cvillegas-dev.com:9191/info/server').subscribe(
      resp => {
        //console.log(resp);
      }
    );
  }
}
