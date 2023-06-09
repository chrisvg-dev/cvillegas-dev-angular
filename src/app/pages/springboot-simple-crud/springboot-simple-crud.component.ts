import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-springboot-simple-crud',
  templateUrl: './springboot-simple-crud.component.html',
  styleUrls: ['./springboot-simple-crud.component.css']
})
export class SpringbootSimpleCrudComponent implements OnInit {

  projects: Project[] = [];
  displayedColumns: string[] = ['Id', 'Component', 'Description', 'Title', 'Username', 'Created', 'Updated']
  
  constructor(private springService: SpringbootService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.springService.findAll().subscribe(
      {
        next: data => {
          console.log(data)
          this.projects = data;
        },
        error: err => {
          console.error(err)
        },
        complete: () => {
          console.log('Process finished')
        },
      }
    );
  }
}
