import { Component, OnInit } from '@angular/core';
import { SpringbootService } from 'src/app/services/springboot.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  data: any[] = [];
  default: string = environment.DEFAULT;

  constructor(private springBootService: SpringbootService) {}
  
  ngOnInit(): void {
    this.springBootService.findMyCourses().subscribe({
      next: (data) => this.data = data,
      error: error => { throw new Error(error) },
      complete: () => console.log('Process done')      
    });
  }

  changeCertificate(data: string): void {
    this.default = data;
  }
}
