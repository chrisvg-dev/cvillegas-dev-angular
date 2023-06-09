import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sugestions',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.css']
})
export class SugestionsComponent implements OnInit {
  public data: any = [];

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.http.get('https://cvillegas-dev.com:9191/data/projects').subscribe(
      data => {
        console.log(data);
        this.data = data;
      }
    );
  }

} 
