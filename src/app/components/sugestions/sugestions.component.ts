import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sugestions',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.css']
})
export class SugestionsComponent implements OnInit {

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get('http://cvillegas-dev.com:9191/api/v1/projects').subscribe(
      data => {
        console.log(data);
      }
    );
  }

} 
