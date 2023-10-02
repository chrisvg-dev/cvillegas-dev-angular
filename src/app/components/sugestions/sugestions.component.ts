import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'projects',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.css']
})
export class SugestionsComponent implements OnInit {
  public data: any = [];

  constructor(private http: SpringbootService){}
  
  ngOnInit(): void {
    this.http.findProjects().subscribe(
      {
        next: resp => {
          console.log(resp)
          this.data = resp
        }
      }
    );
  }

} 
