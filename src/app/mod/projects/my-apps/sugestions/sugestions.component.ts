import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringbootService } from 'src/app/services/springboot.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'projects',
  templateUrl: './sugestions.component.html',
  styleUrls: ['./sugestions.component.css']
})
export class SugestionsComponent implements OnInit {
  public data: any = [];

  columnas: string[] = ['Name', 'Description', 'Language', 'Link'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource:any;

  constructor(private http: SpringbootService){}
  
  ngOnInit(): void {
    this.http.findProjects().subscribe(
      {
        next: resp => {
          this.data = resp;

          this.dataSource = new MatTableDataSource(this.data);
          this.dataSource.paginator = this.paginator;
        }
      }
    );
  }

} 
